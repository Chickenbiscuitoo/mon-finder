import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AiFillGithub } from 'react-icons/ai'
import Pokemons from '../components/Pokemons'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>mon-finder</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Pokemons />
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

export default Home
