import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import usePokemonStore from '../../store'
import styles from '../../styles/Pokemon.module.css'
import { AiFillGithub } from 'react-icons/ai'

const PokemonDetail: NextPage = () => {
	const router = useRouter()
	const { id } = router.query

	const { pokemonDetail } = usePokemonStore()

	const { name, sprite, weight, height, types } = pokemonDetail

	useEffect(() => {
		if (id) {
			usePokemonStore.getState().fetchPokemonDetail(id)
		}
	}, [id])

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h3>{name}</h3>
				<div className={styles.img_container}>
					<img src={sprite} alt="" />
				</div>
				<div className={styles.content}>
					<span className={styles.info_content}>
						<p>Weight: {weight}</p>
						<p>Height: {height}</p>
					</span>
					<span className={styles.types_content}>
						{types?.map((t: string) => (
							<h5 key={t}>{t}</h5>
						))}
					</span>
				</div>
			</main>
			<footer className={styles.footer}>
				<a
					href="https://github.com/Chickenbiscuitoo"
					target="_blank"
					rel="noopener noreferrer"
				>
					Created by Chickenbiscuitoo
					<span className={styles.logo}>
						<AiFillGithub />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default PokemonDetail
