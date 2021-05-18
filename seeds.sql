INSERT INTO department (department_name)
VALUES
    ("HR"),
    ("Management"),
    ("CSR"),
    ("Shift Lead"),
    ("Associate");
    

INSERT INTO role ( title, salary, department_id)
VALUES
    ("Head of HR", 80000.00, 1),
    ("Clerical to Head of HR", 20000.00, 1),
    ("Assitant HR", 30000.00, 1),
    ("General Manager", 80000.00, 2),
    ("Assistant Manager", 50000.00, 2),
    ("Floor Manager", 40000.00, 2),
    ("CSR Head", 55000.00,  3),
    ("CSR Team Lead", 40000.00,  3),
    ("CSR Clerical", 23000.00,  3),
    ("Kitchen Shift Lead", 33000.00, 4),
    ("Vending Shift Lead", 33000.00, 4),
    ("Ushers Shift Lead", 33000.00, 4),
    ("Kitchen Associate", 23000.00, 5),
    ("Vending Associate", 23000.00, 5),
    ("Ushers Associate", 23000.00, 5);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES
    ("Adam", "Ramos", "Head of HR", NULL),
    ("Mike", "Michealson", "Clerical to Head of HR",1),
    ("Tory", "Bory", "Assitant HR",1),
    ("Mel", "Middleton", "General Manager", Null),
    ("Burt", "Landcaster", "Assistant Manager", 1),
    ("Derek", "Oshea", "Floor Manager", 1),
    ("Curt", "Dirt", "CSR Head", 1),
    ("Cecil", "Vercil", "CSR Team Lead", 2),
    ("Kelly", "Kapowski", "CSR Clerical", 2),
    ("Danny", "Diapers", "Kitchen Shift Lead", 2),
    ("Mak", "Musty", "Vending Shift Lead", 2),
    ("Bue", "Billy", "Ushers Shift Lead", 2),
    ("Benny", "Bueford", "Kitchen Associate",3),
    ("Mina", "Alina", "Kitchen Associate", 3),
    ("Nate", "Noodles", "Vending Associate", 3),
    ("Kent", "Klab", "Ushers Associate", 3),
    ("Howard", "Duck", "Ushers Associate", 3);