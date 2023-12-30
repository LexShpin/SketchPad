const BLACK_COLOR = '#0000'

// Grid
const grid = document.querySelector('.grid')
let gridItems = document.querySelectorAll('.grid__item')

// Color settings
let colorInput = document.getElementById('color-input')
let isColorMode = true
let isRainbowMode = false
let isEraserMode = false

// Settings buttons
const colorModeBtn = document.querySelector('.color-mode-btn')
const rainbowModeBtn = document.querySelector('.rainbow-mode-btn')
const eraserBtn = document.querySelector('.eraser-btn')
const clearBtn = document.querySelector('.clear-btn')
const gridSizeSlider = document.querySelector('.grid-size-slider')
const gridSizeSliderLabel = document.querySelector('.grid-size-slider-label')

const createGridItem = (size) => {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid__item')

    let gridItemWidth = 100 / size

    gridItem.style.width = `${gridItemWidth}%`
    gridItem.style.height = `${gridItemWidth}%`

    grid.appendChild(gridItem)
}

const generateGrid = (size) => {
    removeAllChildNodes(grid)

    for (let i = 1; i <= size; i++) {

        for (let j = 1; j <= size -1; j++) {
            createGridItem(size)
        }
        createGridItem(size)

    }

    activateGridItems()
}

const activateGridItems = () => {
    gridItems = document.querySelectorAll('.grid__item')

    gridItems.forEach(item => item.addEventListener('mouseenter', e => {
        if (isColorMode) {
            item.style.backgroundColor = colorInput.value
        } else if (isRainbowMode) {
            item.style.backgroundColor = getRandomColor()
        } else if (isEraserMode) {
            item.style.backgroundColor = BLACK_COLOR
        }
    }))
}

const getRandomColor = () => {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

gridSizeSlider.addEventListener('input', e => {
    gridSizeSliderLabel.textContent = `${e.target.value}x${e.target.value}`

    generateGrid(e.target.value)
})

colorModeBtn.addEventListener('click', e => {
    isColorMode = true
    isRainbowMode = false
    isEraserMode = false
})

rainbowModeBtn.addEventListener('click', e => {
    isColorMode = false
    isRainbowMode = true
    isEraserMode = false
})

eraserBtn.addEventListener('click', e => {
    isColorMode = false
    isRainbowMode = false
    isEraserMode = true
})

clearBtn.addEventListener('click', e => {
    gridItems.forEach(item => {
        item.style.backgroundColor = BLACK_COLOR
    })
})

generateGrid(16)