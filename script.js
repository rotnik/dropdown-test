document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownHeader = document.querySelector(".dropdown-header");
    const dropdownPlaceholder = document.querySelector(".dropdown-placeholder");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const selectedText = document.querySelector(".selected-text");
    let selectedItem = null;


    dropdownHeader.addEventListener("click", () => {
        dropdown.classList.toggle("open");
    });


    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            if (selectedItem === item) {
            
                dropdownPlaceholder.textContent = item.textContent;
                selectedText.textContent = item.textContent;
                dropdown.classList.remove("open");
                selectedItem = null;
            } else {
                
                dropdownItems.forEach(i => i.classList.remove("selected"));
                item.classList.add("selected");
                selectedItem = item;
            }
        });
    });

   
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
            selectedItem = null;
            dropdownItems.forEach(i => i.classList.remove("selected"));
        }
    });
});
