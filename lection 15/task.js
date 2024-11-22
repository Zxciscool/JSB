class Note {
    constructor(title, content) {
        if (!title || !content) {
            throw new Error('Заголовок та зміст нотатки не можуть бути порожніми');
        }
        this.id = Date.now().toString();
        this.title = title;
        this.content = content;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
 
    edit(title, content) {
        if (!title || !content) {
            throw new Error('Заголовок та зміст нотатки не можуть бути порожніми');
        }
        this.title = title;
        this.content = content;
        this.updatedAt = new Date();
    }
 
    toggleComplete() {
        this.completed = !this.completed;
        this.updatedAt = new Date();
    }
 
    getInfo() {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            completed: this.completed,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
 }
 
 class TodoList {
    constructor() {
        this.notes = new Map();
    }
 
    addNote(title, content) {
        const note = new Note(title, content);
        this.notes.set(note.id, note);
        return note.id;
    }
 
    deleteNote(id) {
        return this.notes.delete(id);
    }
 
    editNote(id, title, content) {
        const note = this.notes.get(id);
        if (note) {
            note.edit(title, content);
            return true;
        }
        return false;
    }
 
    toggleNoteComplete(id) {
        const note = this.notes.get(id);
        if (note) {
            note.toggleComplete();
            return true;
        }
        return false;
    }
 
    getNoteInfo(id) {
        const note = this.notes.get(id);
        return note ? note.getInfo() : null;
    }
 
    getAllNotes() {
        return Array.from(this.notes.values()).map(note => note.getInfo());
    }
 
    getStats() {
        const total = this.notes.size;
        const completed = Array.from(this.notes.values())
            .filter(note => note.completed).length;
        return {
            total,
            completed,
            uncompleted: total - completed
        };
    }
 
    // Пошук нотаток
    searchNotes(query) {
        return Array.from(this.notes.values())
            .filter(note => 
                note.title.toLowerCase().includes(query.toLowerCase()) ||
                note.content.toLowerCase().includes(query.toLowerCase())
            )
            .map(note => note.getInfo());
    }
 
    // Сортування за статусом
    sortByStatus(completedFirst = true) {
        return Array.from(this.notes.values())
            .sort((a, b) => {
                if (completedFirst) {
                    return b.completed - a.completed;
                }
                return a.completed - b.completed;
            })
            .map(note => note.getInfo());
    }
 
    // Сортування за датою створення
    sortByCreationDate(newest = true) {
        return Array.from(this.notes.values())
            .sort((a, b) => {
                if (newest) {
                    return b.createdAt - a.createdAt;
                }
                return a.createdAt - b.createdAt;
            })
            .map(note => note.getInfo());
    }
 
    // Сортування за датою оновлення
    sortByUpdateDate(newest = true) {
        return Array.from(this.notes.values())
            .sort((a, b) => {
                if (newest) {
                    return b.updatedAt - a.updatedAt;
                }
                return a.updatedAt - b.updatedAt;
            })
            .map(note => note.getInfo());
    }
 
    // Пошук за діапазоном дат
    searchByDateRange(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        return Array.from(this.notes.values())
            .filter(note => 
                note.createdAt >= start && note.createdAt <= end
            )
            .map(note => note.getInfo());
    }
 }