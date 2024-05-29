import create from 'zustand'

 export const useRandomIDStore = create((set) => ({
  randomID: '',
  generateRandomID: () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const newRandomArray = [...letters, ...numbers]
    let randomID = ''
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * newRandomArray.length)
      randomID += newRandomArray[randomIndex]
    }
    set({ randomID })
  }
}))

