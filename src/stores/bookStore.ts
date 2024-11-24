import { defineStore } from 'pinia'
import axios from 'axios';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [] as Array<Book | FullBook>,
    orders: [] as Order[],
    isLoading: false,
    error: false,
  }),
  actions: {
    async fetchRecentBooks() {
      this.isLoading = true;
      this.error = false;

      try {
        const response = await axios.get<BooksResponse>("https://www.dbooks.org/api/recent");
        this.books = response.data.books
      }
      catch (e) {
        this.error = true;
        console.log(e);
      }
      finally {
        this.isLoading = false;
      }
    },
    async searchBooks(query: string) {
      this.isLoading = true;
      this.error = false;

      try {
        const response = await axios.get<BooksResponse>(`https://www.dbooks.org/api/search/${query}`);
        this.books = response.data.books
      }
      catch (e) {
        this.error = true;
        console.log(e);
      }
      finally {
        this.isLoading = false;
      }
    },
    async searchById(id: string) {
      this.isLoading = true;
      this.error = false;

      try {
        const response = await axios.get<FullBook>(`https://www.dbooks.org/api/book/${id}`);
        this.books = [response.data]
      }
      catch (e) {
        this.error = true;
        console.log(e);
      }
      finally {
        this.isLoading = false;
      }
    },
    addOrder(order: Order) {
      if (this.orders.some(o => o.id == order.id)) {
        this.orders = this.orders.map(o => o.id == order.id ? { ...o, count: o.count + 1 } : o);
      }
      else {
        this.orders.push({ ...order, count: 1 });
      }

      console.log(this.orders)
    },
    deleteOrder(id: string) {
      if (this.orders.find(o => o.id == id)!.count > 1) {
        this.orders = this.orders.map(o => o.id == id ? { ...o, count: o.count - 1 } : o)
      }
      else {
        this.orders = this.orders.filter(o => o.id != id);
      }
    }
  },
})

type BooksResponse = {
  books: Book[]
}
type Book = {
  id: string
  title: string
  image: string
  subtitle: string
  authors: string
}

type FullBook = Book & {
  description: string
  year: string
  pages: string
}

type Order = {
  id: string
  title: string
  authors: string
  count: number
}