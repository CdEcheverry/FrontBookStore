export interface Editorial {
  IdEditorial: number;
  Name: string;
  Phone: string;
  Email: string;
  CreationDate: string;
  MaximumRegisteredBooks: number;
}

export interface Author {
  IdAuthor: number;
  FullName: string;
  City: string;
  Birthday: string;
  Email?: string | null;
}

export interface Book {
  idBook: number;
  tittle: string;
  gender: string;
  numberPages: number;
  Editorial: Editorial;
  yearPublication: string;
  Author: Author;
  authorFullName: string;
  editorialName: string;
}
