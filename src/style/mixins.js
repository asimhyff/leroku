import { css } from 'styled-components'
import theme from './theme'
const { colors } = theme

const mixins = {
	container: css`
		max-width: 1100px;
		margin: 0 auto;
		overflow: auto;
		padding: 0 40px;
	`,
	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	grid: css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
		justify-content: center;
		align-items: center;
		height: 400px;
	`,
	grid_3: css`
		grid-template-columns: repeat(3, 1fr);
	`,
	card: css`
		background-color: ${colors.white};
		border-radius: 10px;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		padding: 25px;
		margin: 7px;
	`,
	button: css`
		display: inline-block;
		padding: 10px 30px;
		background-color: ${colors.blueBg};
		border-radius: 5px;
		color: ${colors.white};
		border: none;
		cursor: pointer;
		:hover,
		:focus {
			background-color: ${colors.darkBlueBg};
		}
	`,
	textCenter: css`
		text-align: center;
	`,
	transition: `all 0.25s ease`,

	//alerts
	alert: css`
	padding:10px;
	border-radius: 5px;
	color: ${colors.white};
	font-weight: bold;
	`,

	alertSuccess: css`
	background-color: ${colors.success}
	`,

	//margins
	my_1: css`
		margin: 1rem 0;
	`,
	my_2: css`
		margin: 1.5rem 0;
	`,
	my_3: css`
		margin: 2rem 0;
	`,
	my_4: css`
		margin: 3rem 0;
	`,
	my_5: css`
		margin: 4rem 0;
	`,
	mx_1: css`
		margin: 0 1rem;
	`,
	mx_2: css`
		margin: 0 1.5rem;
	`,
	mx_3: css`
		margin: 0 2rem;
	`,
	mx_4: css`
		margin: 0 3rem;
	`,
	mx_5: css`
		margin: 0 4rem;
	`,
	m_1: css`
		margin: 1rem;
	`,
	m_2: css`
		margin: 1.5rem;
	`,
	m_3: css`
		margin: 2rem;
	`,
	m_4: css`
		margin: 3rem;
	`,
	m_5: css`
		margin: 4rem;
	`,

	//paddings
	p_1: css`
		padding: 1rem;
	`,
	p_2: css`
		padding: 1.5rem;
	`,
	p_3: css`
		padding: 2rem;
	`,
	p_4: css`
		padding: 3rem;
	`,
	p_5: css`
		padding: 4rem;
	`,
	py_1: css`
		padding: 1rem 0;
	`,
	py_2: css`
		padding: 1.5rem 0;
	`,
	py_3: css`
		padding: 2rem 0;
	`,
	py_4: css`
		padding: 3rem 0;
	`,
	py_5: css`
		padding: 4rem 0;
	`,
	px_1: css`
		padding: 0 1rem;
	`,
	px_2: css`
		padding: 0 1.5rem;
	`,
	px_3: css`
		padding: 0 2rem;
	`,
	px_4: css`
		padding: 0 3rem;
	`,
	px_5: css`
		padding: 0 4rem;
	`,
}

export default mixins
