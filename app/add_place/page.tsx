import { saveUrbaniaDefaults } from '@/actions/places';

export default function AddPlaceForm() {
  return (
    <>
      <form action={saveUrbaniaDefaults}>
        <label>Id</label>
        <input name="id" type="text" />
        <label>Place</label>
        <input name="place" type="text" />
        <label>Description</label>
        <textarea name="description" />
        <label>Image</label>
        <input name="image" type="text" />
        <label>Category</label>
        <input name="category" type="text" />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
