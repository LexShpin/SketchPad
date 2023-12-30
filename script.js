
const grid = document.querySelector('.grid')
let gridItems = document.querySelectorAll('.grid__item')

let colorInput = document.getElementById('color-input')

const createGridItem = (size) => {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid__item')

    let gridItemWidth = 100 / size

    gridItem.style.width = `${gridItemWidth}%`
    gridItem.style.height = `${gridItemWidth}%`

    grid.appendChild(gridItem)
}

const generateGrid = (size) => {
    for (let i = 1; i <= size; i++) {

        for (let j = 1; j <= size -1; j++) {
            createGridItem(size)
        }
        createGridItem(size)
    }

    gridItems = document.querySelectorAll('.grid__item')
}

generateGrid(5)

gridItems.forEach(item => item.addEventListener('mouseenter', e => {
    item.style.backgroundColor = colorInput.value
}))

