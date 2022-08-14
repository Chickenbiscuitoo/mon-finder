import create from 'zustand'
import axios from 'axios'

interface Pokemon {
	name: string
	url: string
}

interface PokemonDetail {
	id: number
	name: string
	sprite: string
	weight: number
	height: number
	types: string[]
}

interface PokemonState {
	pokemons: Pokemon[]
	pokemonDetail: PokemonDetail | {} | any

	filter: string
	filteredPokemons: Pokemon[]

	setFilter: (filter: string) => void
	fetchPokemons: () => void
	fetchPokemonDetail: (id: string | string[]) => void
}

const usePokemonStore = create<PokemonState>((set) => ({
	pokemons: [],
	pokemonDetail: {},

	filter: '',
	filteredPokemons: [],

	setFilter: (filter: string) =>
		set((state) => ({
			filter,
			filteredPokemons: state.pokemons.filter((pokemon: Pokemon) =>
				pokemon.name.toLowerCase().includes(filter.toLowerCase())
			),
		})),

	fetchPokemons: async () => {
		const response = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
		)
		set({
			pokemons: response.data.results,
			filteredPokemons: response.data.results,
		})
	},
	fetchPokemonDetail: async (id: string | string[]) => {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${id}`
		)

		const pokemonTypes: string[] = []
		response.data.types.map((t: any) => pokemonTypes.push(t.type.name))

		const pokemonData = {
			id: response.data.id,
			name: response.data.name,
			sprite: response.data.sprites.front_default,
			weight: response.data.weight,
			height: response.data.height,
			types: pokemonTypes,
		}
		set({
			pokemonDetail: pokemonData,
		})
	},
}))

export default usePokemonStore
