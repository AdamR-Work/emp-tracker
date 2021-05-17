INSERT INTO departments (department_name)
VALUES
    ("HR"),
    ("Management"),
    ("CSR"),
    ("Shift Lead"),
    ("Associate"),
    

INSERT INTO roles ( title, salary, department_id)
VALUES
    ("Head of HR", 80000, 1),
    ("Clerical to Head of HR", 20000, 1),
    ("Assitant HR", 30000, 1),
    ("General Manager", 80000, 2),
    ("Assistant Manager", 50000, 2),
    ("Floor Manager", 40000, 2),
    ("CSR Head", 55000,  3),
    ("CSR Team Lead", 40000,  3),
    ("CSR Clerical", 23000,  3),
    ("Kitchen Shift Lead", 33000, 4),
    ("Vending Shift Lead", 33000, 4),
    ("Ushers Shift Lead", 33000, 4),
    ("Kitchen Associate", 23000, 5),
    ("Vending Associate", 23000, 5),
    ("Ushers Associate", 23000, 5),

INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES
    ("Adam", "Ramos", "Head of HR", NULL),
    ("Mike", "Michealson", "Clerical to Head of HR", "Head of HR"),
    ("Tory", "Bory", "Assitant HR", "Head of HR"),
    ("Mel", "Middleton", "General Manager", Null),
    ("Burt", "Landcaster", "Assistant Manager", "Regional Manager"),
    ("Derek", "Oshea", "Floor Manager", "Regional Manager"),
    ("Curt", "Dirt", "CSR Head", "Head Accountant"),
    ("Cecil", "Vercil", "CSR Team Lead", "Assistant Manager"),
    ("Kelly", "Kapowski", "CSR Clerical", "Assistant Manager"),
    ("Danny", "Diapers", "Kitchen Shift Lead", "Assistant Manager"),
    ("Mak", "Musty", "Vending Shift Lead", "Assistant Manager"),
    ("Bue", "Billy", "Ushers Shift Lead", "Assistant Manager"),
    ("Benny", "Bueford", "Kitchen Associate","Floor Manager"),
    ("Mina", "Alina", "Kitchen Associate", "Floor Manager"),
    ("Nate", "Noodles", "Vending Associate", "Floor Manager"),
    ("Kent", "Klab", "Ushers Associate", "Floor Manager"),
    ("Howard", "Duck", "Ushers Associate", "Floor Manager");