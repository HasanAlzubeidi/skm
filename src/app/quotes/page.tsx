'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getQuotes, addQuote } from '@/modules/apiClient';
import type { Quote, QuoteInsert } from '@/modules/apiTypes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function QuoteForm() {
  const [quotetext, setQuoteText] = useState('');
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState<Quote[] | undefined>(undefined);

  const fetchQuotes = async () => {
    const quoteList: Quote[] | undefined = await getQuotes();
    setQuotes(quoteList);
  };

  useEffect(() => {
    void fetchQuotes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newQuote: QuoteInsert = {
      quotetext: quotetext,
      author: author,
    };

    try {
      await addQuote(newQuote);
    } catch (error) {
      console.error('message', error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <h1 className="flex flex-col items-center w-full">List of quotes</h1>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author</TableHead>
              <TableHead>Quote</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotes ? (
              quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>{quote.author}</TableCell>
                  <TableCell>{quote.quotetext}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow></TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <h1 className="flex flex-col items-center w-full">Add a quote</h1>
      <div className="w-full gap-10">
        {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="quoteText">Quote</Label>
            <Input
              type="text"
              id="quoteText"
              value={quotetext}
              onChange={(e) => setQuoteText(e.target.value)}
              required
              className="w-full"
              placeholder="Quote text"
            />
          </div>

          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full"
              placeholder="Author's name"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-500 hover:bg-gray-400">
            Add Quote
          </Button>
        </form>
      </div>
    </div>
  );
}