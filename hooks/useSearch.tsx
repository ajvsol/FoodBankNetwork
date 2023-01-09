import { useState } from 'react';

export default function useSearch() {
	const[search, setSearch] = useState('')
	const[text, setText] = useState('')

	return [search, setSearch, text, setText]
}