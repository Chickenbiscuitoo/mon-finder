import create from 'zustand'

interface Pokemon {
	id: number
	name: string
}

interface PokemonState {
	pokemons: Pokemon[]
	filter: string
	filteredPokemons: Pokemon[]

	setPokemons: (pokemons: Pokemon[]) => void
	setFilter: (filter: string) => void
}

const usePokemonStore = create<PokemonState>((set) => ({
	pokemons: [],
	filter: '',
	filteredPokemons: [],

	setPokemons: (pokemons: Pokemon[]) =>
		set({ pokemons, filteredPokemons: pokemons }),

	setFilter: (filter: string) =>
		set((state) => ({
			filter,
			filteredPokemons: state.pokemons.filter((pokemon: Pokemon) =>
				pokemon.name.toLowerCase().includes(filter.toLowerCase())
			),
		})),
}))

export default usePokemonStore
