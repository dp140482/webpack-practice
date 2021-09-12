export function drawItem(item) {
    let itemElement = document.createElement('div');
    itemElement.className = 'gallery-item';

    const imgElement = document.createElement('img');
    imgElement.className = 'gallery-item__image';
    imgElement.src = item.resource;

    const titleElement = document.createElement('p');
    titleElement.className = 'gallery-item__title';
    titleElement.textContent = item.title;

    itemElement.appendChild(imgElement);
    itemElement.appendChild(titleElement);

    return itemElement;
}