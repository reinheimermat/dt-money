import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant?: 'income' | 'outcome'
}

interface PageButtonProps {
  isSelect?: boolean
  isTherePage?: boolean
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1rem;
  align-items: center;
`

export const ArrowButton = styled.button<PageButtonProps>`
  border: none;
  background: transparent;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-400']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['gray-600']};
  }

  ${(props) =>
    props.isTherePage &&
    `
    color: ${props.theme['green-500']};
  `}
`

export const PageButton = styled.button<PageButtonProps>`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-400']};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['gray-700']};
  }

  ${(props) =>
    props.isSelect &&
    `
    background: ${props.theme['green-700']};
    color: ${props.theme['gray-100']};

    &:hover {
      background: ${props.theme['green-500']};
    }
  `}
`
