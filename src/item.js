export function drawItem(item) {
    let itemElement = document.createElement('div');
    itemElement.className = 'gallery-item';

    if (item.type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.className = 'gallery-item__image';
        imgElement.src = item.resource;
        itemElement.appendChild(imgElement);
    } else if (item.type === 'audio') {
        const audioElement = document.createElement('audio');
        audioElement.className = 'gallery-item__audio';
        audioElement.src = item.resource;
        audioElement.controls = true;
        itemElement.appendChild(audioElement);
    } else if (item.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.className = 'gallery-item__video';
        videoElement.src = item.resource;
        videoElement.controls = true;
        itemElement.appendChild(videoElement);
    }

    const titleElement = document.createElement('p');
    titleElement.className = 'gallery-item__title';
    titleElement.textContent = item.title;
    itemElement.appendChild(titleElement);

    return itemElement;
}