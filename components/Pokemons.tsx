import type { NextComponentType } from 'next'
import styles from '../styles/Home.module.css'
import usePokemonStore from '../store'
import { useEffect } from 'react'
import Link from 'next/link'

const Pokemons: NextComponentType = () => {
	const { filter, filteredPokemons, setFilter } = usePokemonStore()

	useEffect(() => {
		usePokemonStore.getState().fetchPokemons()
	}, [])

	const pokemonItems = filteredPokemons.map((p) => {
		const id = p.url.slice(34, -1)
		return (
			<div key={id} className={styles.pokemon_item}>
				<Link href={`/pokemon/${id}`}>
					<a>{p.name}</a>
				</Link>
			</div>
		)
	})

	return (
		<>
			<div className={styles.searchbar_container}>
				<input
					type="text"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>
			<div className={styles.pokemons_container}>{pokemonItems}</div>
		</>
	)
}

export default Pokemons
