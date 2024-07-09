import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'

import Home from '@/app/home/page'

describe('Home screen', () => {
  beforeAll(async () => {
    const home = await Home()

    render(home)
  })

  it('Should render home page', () => {
    expect(screen.getByText(/movie hub/i)).toBeDefined()
    expect(screen.getByTestId('search-button')).toBeDefined()
  })

  // it('should click to search', () => {
  //   const button = screen.getByTestId('search-button')

  //   fireEvent.click(button)

  //   expect(onClick).toHaveBeenCalledTimes(1)
  // })
})
