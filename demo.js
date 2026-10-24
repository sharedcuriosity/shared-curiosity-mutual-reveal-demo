const answers = { one: null, two: null };
const choices = document.querySelector('#choices');
const result = document.querySelector('#result');
const options = [
  ['yes', 'Yes'],
  ['maybe', 'Maybe'],
  ['no', 'No'],
  ['pass', 'Pass'],
];

for (const [person, label] of [['one', 'Person 1'], ['two', 'Person 2']]) {
  const group = document.createElement('fieldset');
  group.className = 'answers';
  const legend = document.createElement('legend');
  legend.textContent = label;
  group.append(legend);

  for (const [value, text] of options) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      answers[person] = value;
      for (const sibling of group.querySelectorAll('button')) sibling.setAttribute('aria-pressed', String(sibling === button));
      reveal();
    });
    group.append(button);
  }
  choices.append(group);
}

function reveal() {
  if (!answers.one || !answers.two) {
    result.textContent = 'The result stays hidden until both people choose.';
    return;
  }
  if (answers.one === 'pass' || answers.two === 'pass') {
    result.textContent = 'Someone passed. Respect the choice and choose another topic.';
  } else if (answers.one === answers.two && answers.one === 'yes') {
    result.textContent = 'You both said yes. What kind of café would feel fun to try?';
  } else if (answers.one === answers.two && answers.one === 'maybe') {
    result.textContent = 'You are both curious. What would make this an easy, low-pressure plan?';
  } else if (answers.one === answers.two) {
    result.textContent = 'You are aligned on passing this idea. Pick a different plan together.';
  } else {
    result.textContent = 'You answered differently. Ask what each person would enjoy, and leave room for either answer.';
  }
}
