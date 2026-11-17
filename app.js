const courses = [
  {title:'Frontend Development',category:'Development',level:'Beginner',lessons:24,duration:'8 weeks',icon:'⌘',color:'violet',description:'Build responsive websites with HTML, CSS and JavaScript.'},
  {title:'UI/UX Design Basics',category:'Design',level:'Beginner',lessons:18,duration:'6 weeks',icon:'✎',color:'orange',description:'Learn user research, wireframes and clean interface design.'},
  {title:'Python for Data Analysis',category:'Data',level:'Intermediate',lessons:32,duration:'10 weeks',icon:'▥',color:'green',description:'Explore data using Python, Pandas and visualisation.'},
  {title:'React Essentials',category:'Development',level:'Intermediate',lessons:20,duration:'7 weeks',icon:'⚛',color:'blue',description:'Create component-based interfaces with modern React.'},
  {title:'Communication Skills',category:'Business',level:'Beginner',lessons:12,duration:'4 weeks',icon:'☏',color:'pink',description:'Present ideas clearly and collaborate with confidence.'},
  {title:'SQL and Databases',category:'Data',level:'Beginner',lessons:16,duration:'5 weeks',icon:'▤',color:'yellow',description:'Understand relational data and write practical SQL queries.'}
];

const grid = document.querySelector('#course-grid');
const searchInput = document.querySelector('#course-search');
const emptyMessage = document.querySelector('#empty-message');
let activeCategory = 'All';

function createCourseCard(course) {
  const article = document.createElement('article');
  article.className = 'course-card';
  article.innerHTML = `
    <div class="course-icon ${course.color}" aria-hidden="true">${course.icon}</div>
    <div class="course-meta"><span>${course.category}</span><span>${course.level}</span></div>
    <h3>${course.title}</h3><p>${course.description}</p>
    <div class="course-details"><span>▣ ${course.lessons} lessons</span><span>◷ ${course.duration}</span></div>
    <div class="course-bottom"><strong>Free</strong><a class="course-arrow" href="#contact" aria-label="Enquire about ${course.title}">↗</a></div>`;
  return article;
}

function renderCourses() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = courses.filter(course =>
    (activeCategory === 'All' || course.category === activeCategory) &&
    `${course.title} ${course.description} ${course.category}`.toLowerCase().includes(term)
  );
  grid.replaceChildren(...visible.map(createCourseCard));
  emptyMessage.hidden = visible.length !== 0;
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll('.filter').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderCourses();
  });
});

searchInput.addEventListener('input', renderCourses);

const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');
menuButton.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
  menuButton.textContent = '☰';
}));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-status').textContent = 'Thank you! Your demo message has been recorded on this page.';
  event.currentTarget.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();
renderCourses();
