// export function rendeElemToHTML(hits) {
//   const gallery = hits
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<li class="photo-card">
//                     <div class="card-item">
//                             <a href="${largeImageURL}" class="gallery__image">
//                                 <img src="${webformatURL}" alt="${tags}" loading="lazy" width="190">
//                             </a>
//                             <ul class="info">
//                                 <li class="info-item">
//                                     <b>Likes</b><br>${likes}
//                                 </li>
//                                 <li class="info-item">
//                                     <b>Views</b><br>${views}
//                                 </li>
//                                 <li class="info-item">
//                                     <b>Comments</b><br>${comments}
//                                 </li>
//                                 <li class="info-item">
//                                     <b>Downloads</b><br>${downloads}
//                                 </li>
//                             </ul>
//                     </div>
//                 </li>`;
//       }
//     )
//     .join('');
//   refs.gallery.insertAdjacentHTML('beforeend', gallery);
//   galleryLigthbox.refresh();
// }
