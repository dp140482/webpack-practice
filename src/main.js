import './style.scss';
import items from './items.js';
import { drawItem } from './item.js';

let galleryRoot = document.getElementById('galleryRoot');
items.map(item => galleryRoot.appendChild(drawItem(item)));