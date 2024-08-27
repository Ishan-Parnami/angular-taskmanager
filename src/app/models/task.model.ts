export interface Task {
    id: string;
    title: string;
    description?: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high';
    status: 'to-do' | 'in-progress' | 'completed';
    history?: string[]; 
  }
  