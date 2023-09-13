// Get references to the button and dropdown elements
const dropBtn1 = document.getElementById('drop-btn-1');
const dropBtn2 = document.getElementById('drop-btn-2');
const dropBtn3 = document.getElementById('drop-btn-3');
const dropdown1 = document.getElementById('dropdown-1');
const dropdown2 = document.getElementById('dropdown-2');
const dropdown3 = document.getElementById('dropdown-3');

let lastClickedBtn = null;

// Function to hide all other dropBtn except the one that is clicked
function hideOtherButtons(exceptButton) {
    const allButtons = [dropBtn1, dropBtn2, dropBtn3];

    allButtons.forEach((button) => {
        if (button !== exceptButton) {
            button.style.display = 'none';
        }
    });
}

// Function to toggle the display of a dropdown element
function toggleDropdown(dropdown) {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Function to handle dropBtn click
function handleDropBtnClick(dropBtn) {
    if (lastClickedBtn === dropBtn) {
        // Clicked twice on the same dropBtn
        const allButtons = [dropBtn1, dropBtn2, dropBtn3];
        allButtons.forEach((button) => {
            if (button !== dropBtn) {
                button.style.display = 'flex';
            }
        });
    } else {
        hideOtherButtons(dropBtn);
    }
    lastClickedBtn = dropBtn;
}

// Add click event listeners to the buttons
dropBtn1.addEventListener('click', () => {
    toggleDropdown(dropdown1);
    handleDropBtnClick(dropBtn1);
});
dropBtn2.addEventListener('click', () => {
    toggleDropdown(dropdown2);
    handleDropBtnClick(dropBtn2);
});
dropBtn3.addEventListener('click', () => {
    toggleDropdown(dropdown3);
    handleDropBtnClick(dropBtn3);
});
