const explorer = document.getElementById('explorer');
const toggle = document.getElementById('menuToggle');
const close = document.getElementById('closeMenu');
const treeItems = document.querySelectorAll('.tree-item');
const env = window.PORTFOLIO_ENV;
const editorScroller = document.querySelector('.editor-scroll');
const breadcrumbs = document.querySelector('.breadcrumbs strong');
const terminalPanel = document.getElementById('terminalPanel');
const terminalToggle = document.getElementById('terminalToggle');
const terminalClose = document.getElementById('terminalClose');
const terminalForm = document.getElementById('terminalForm');
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const tabsContainer = document.querySelector('.tabs');

if (env) {
  const { profile, skills, projects } = env;
  document.getElementById('profileTitle').textContent = `"${profile.title}"`;
  document.getElementById('profileHeadline').innerHTML = profile.headline.replace(' ', ' <br><span class="gradient-text">').replace(/\.$/, '.</span>');
  document.getElementById('profileSummary').textContent = profile.summary;
  document.getElementById('profileAvailability').textContent = profile.availability;
  document.getElementById('emailLink').href = `mailto:${profile.email}`;
  document.getElementById('githubLink').href = profile.github;
  document.getElementById('skillsGrid').innerHTML = skills.map(skill => `<article class="skill-card"><div class="skill-icon ${skill.tone}">${skill.icon}</div><h3>${skill.title}</h3><p>${skill.items}</p><div class="mini-bar"><i style="width:${skill.percentage}%"></i></div></article>`).join('');
  document.getElementById('projectCount').textContent = `${String(projects.length).padStart(2, '0')} files`;
  document.getElementById('projectsGrid').innerHTML = projects.map(project => `<article class="project-card ${project.cardClass || ''}"><div class="project-top"><span class="folder-icon ${project.iconClass || ''}">${project.icon || '▰'}</span><span class="project-number">${project.number}</span></div><h3>${project.name} ${project.suffix ? `<span>${project.suffix}</span>` : ''}</h3><p>${project.description}</p><div class="tech">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-links"><a href="${project.url}">${project.linkText}</a><a href="${project.repo}" aria-label="${project.name} repository">⌘</a></div></article>`).join('');
}

function setMenu(open) {
  explorer.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => setMenu(!explorer.classList.contains('open')));
close.addEventListener('click', () => setMenu(false));
treeItems.forEach(item => item.addEventListener('click', () => {
  treeItems.forEach(link => link.classList.remove('current'));
  item.classList.add('current');
  setMenu(false);
}));

function activateTab(target) {
  const tab = document.querySelector(`.tab[data-target="${target}"]`);
  if (!tab) return;
  tab.classList.remove('hidden');
  document.querySelectorAll('.tab').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  breadcrumbs.textContent = tab.dataset.file;
}

function ensureTab(target, file, icon) {
  let tab = document.querySelector(`.tab[data-target="${target}"]`);
  if (tab) { tab.classList.remove('hidden'); return tab; }
  tab = document.createElement('button');
  tab.className = 'tab';
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', 'false');
  tab.dataset.target = target;
  tab.dataset.file = file;
  tab.innerHTML = `${icon}${file} <b class="tab-close" data-close aria-label="Close ${file}">×</b>`;
  tabsContainer.appendChild(tab);
  return tab;
}

document.querySelectorAll('.tree-item').forEach(link => link.addEventListener('click', () => {
  const target = link.getAttribute('href').slice(1);
  ensureTab(target, link.dataset.tab, link.querySelector('.file-icon').outerHTML);
  activateTab(target);
}));

const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const active = document.querySelector(`.tree-item[href="#${visible.target.id}"]`);
  if (!active) return;
  treeItems.forEach(link => link.classList.toggle('current', link === active));
  activateTab(visible.target.id);
}, {root: editorScroller, threshold: .35});
sections.forEach(section => observer.observe(section));

tabsContainer.addEventListener('click', event => {
  const tab = event.target.closest('.tab');
  if (!tab) return;
  if (event.target.closest('[data-close]')) {
    event.stopPropagation();
    tab.classList.add('hidden');
    const fallback = document.querySelector('.tab:not(.hidden)');
    if (fallback) activateTab(fallback.dataset.target);
    return;
  }
  activateTab(tab.dataset.target);
  document.getElementById(tab.dataset.target).scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function setTerminal(open) {
  terminalPanel.classList.toggle('open', open);
  terminalPanel.setAttribute('aria-hidden', String(!open));
  terminalToggle.setAttribute('aria-expanded', String(open));
  if (open) terminalInput.focus();
}

terminalToggle.addEventListener('click', () => setTerminal(!terminalPanel.classList.contains('open')));
terminalClose.addEventListener('click', () => setTerminal(false));

function terminalFiles() {
  return {
    'about.md': `# About\n${env.profile.summary}`,
    'stack.ts': env.skills.map(skill => `${skill.title}: ${skill.items} (${skill.percentage}%)`).join('\n'),
    'projects.tsx': env.projects.map(project => `${project.name}: ${project.description}\nTags: ${project.tags.join(', ')}`).join('\n\n'),
    'journey.json': '{\n  "mindset": "learn deeply, ship thoughtfully",\n  "focus": ["full-stack products", "AI workflows", "deployment"]\n}',
    'contact.sh': `EMAIL=${env.profile.email}\nGITHUB=${env.profile.github}`
  };
}

function printTerminal(text, className = '') {
  const line = document.createElement('p');
  line.textContent = text;
  if (className) line.className = className;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalForm.addEventListener('submit', event => {
  event.preventDefault();
  const command = terminalInput.value.trim();
  if (!command) return;
  printTerminal(`visitor@portfolio:~$ ${command}`, 'command-line');
  terminalInput.value = '';
  const [program, ...args] = command.split(/\s+/);
  const files = terminalFiles();
  if (program === 'help') printTerminal('Available: help, ls, cat <file>, grep <text> [file], clear');
  else if (program === 'ls') printTerminal(Object.keys(files).join('  '));
  else if (program === 'cat') printTerminal(args[0] && files[args[0]] ? files[args[0]] : 'cat: choose a file shown by ls', 'error');
  else if (program === 'grep') {
    const [term, file] = args;
    const source = file ? files[file] : Object.values(files).join('\n');
    if (!term) printTerminal('grep: provide text to search for', 'error');
    else if (!source) printTerminal(`grep: ${file}: file not found`, 'error');
    else { const matches = source.split('\n').filter(line => line.toLowerCase().includes(term.toLowerCase())); printTerminal(matches.length ? matches.join('\n') : `No matches for "${term}".`); }
  } else if (program === 'clear') terminalOutput.innerHTML = '';
  else printTerminal(`Command not available: ${program}. Type help.`, 'error');
});
