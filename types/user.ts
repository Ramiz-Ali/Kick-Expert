export interface FirestoreUser {
  uid: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
}