export const selectedRoomIdSelector = ({ rooms: { selectedRoomId: value } }: any) => value;
export const albumsSelector = ({ rooms: { albums: value } }: any) => value;
export const roomsSelector = ({ rooms: { allRooms: value } }: any) => value;
export const singleUnitFetchingRoomsSelector = ({ rooms: { fetchingRooms: value } }: any) => value;
export const photoRoomsSelector = ({ rooms: { photoRooms: value } }) => value;
export const allPhotoRoomsSelector = ({ rooms: { allRoomsWithPhotos: value } }) => value;
export const unitRoomsWithPhotosSelector = ({ rooms: { unitRoomsWithPhotos: value } }) => value;
export const roomLevelUpdatedSelector = ({ rooms: { roomLevelUpdated: value } }) => value;
export const selectedUnitRoomsSelector = ({ rooms: { selectedUnitRooms: value } }) => value;
export const fetchingRoomsSelector = ({ rooms: { fetchingRooms: value } }) => value;