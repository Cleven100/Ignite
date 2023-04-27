import React from 'react'
import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

export const Summary = () => {
  return (
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>R$265.000</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong> -R$17.050</strong>
        </div>
        <div className='highlight-background'>
            <header>
                <p>Total</p>
                <img src={total} alt="Total" />
            </header>
            <strong>R$247.950,00</strong>
        </div>
    </Container>
  )
}
