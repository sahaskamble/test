import Navbar from "../components/Navbar";

export default function Admin() {
  return(
    <div>
      <Navbar />
      <main>
        <div class="section">
          <div class="section py-1 px-3">
            <div class="columns">
              <div
                class="column is-10 title has-text-centered is-underlined py-4"
                >
                Products Dashboard
              </div>
              <div class="column"></div>
              <div class="column">
                <a href="/admin/admin_panel" class="button is-link"
                >Add Products</a
                >
              </div>
            </div>
          </div>
          <div class="section">
            <table class="table is-hoverable is-fullwidth">
              <thead>
                <tr class="has-text-weight-bold is-size-5">
                  <th>No.</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Company</th>
                  <th>Ratings</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody class="is-size-6">
                {
                  data.output.map((items: any) => (
                    <tr>
                    <th>{(count = count + 1)}</th>
                    <th>{items.CategoryName}</th>
                    <th>{items.SubCategoryName}</th>
                      <th>{items.Title}</th>
                    <th>{items.Description}</th>
                      <th>{items.Price}</th>
                      <th>{items.Company}</th>
                      <th>{items.Ratings}</th>
                      <th>
                        <a
                          class="button is-danger"
                          href={`http://localhost:3000/api/delete/product/?product_id=${items.ProductId}`}
                          >
                          Delete
                        </a>
                      </th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
