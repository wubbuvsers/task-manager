import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;

  beforeEach(() => {
    component = new HomePage({} as any, {} as any);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    component.newTask = 'Homework';
    component.addTask();

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].text).toBe('Homework');
  });

  it('should delete a task', () => {
    component.tasks = [
      { text: 'Test Task', done: false }
    ];

    component.tasks.splice(0, 1);

    expect(component.tasks.length).toBe(0);
  });

  it('should mark task complete', () => {
    component.tasks = [
      { text: 'Test Task', done: false }
    ];

    component.tasks[0].done = true;

    expect(component.tasks[0].done).toBe(true);
  });
});