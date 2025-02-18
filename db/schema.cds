namespace db;

entity Task {
    key ID:Integer;
    title: String(100);
    isDone: Boolean default false;
}
