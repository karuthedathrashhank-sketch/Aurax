export type ProjectStatus = 'Draft' | 'Published'
export interface Project { id:string; name:string; prompt:string; type:string; status:ProjectStatus; updated:string; accent:string }
export interface FileNode { name:string; language:string; content:string }
export type View = 'landing'|'dashboard'|'new'|'builder'|'templates'|'models'|'settings'
