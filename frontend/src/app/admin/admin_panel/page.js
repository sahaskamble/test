import Navbar from "@/app/components/Navbar";

export default function Panel() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="section">
          <div className="container">
            <div className="title has-text-centered is-underlined py-4">
              Add Items
            </div>
          </div>
          <div className="container">
            <form
              className="form box"
              action="http://localhost:3000/api/admin/insert/products"
              method="post"
              enctype="multipart/form-data"
            >
              <div className="tile is-parent">
                <div className="tile is-child px-4">
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Category</label
                    >
                    <div className="control">
                      <div className="select is-medium is-link">
                        <select name="category">
                          <option value="1"
                          >Electronics</option
                          >
                          <option value="2">Automobile</option
                          >
                          <option value="3"
                          >House Decor</option
                          >
                          <option value="4"
                          >House Appliances</option
                          >
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Sub category</label
                    >
                    <div className="control">
                      <input
                        className="input is-medium is-link"
                        type="text"
                        name="subcategory"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Title</label
                    >
                    <div className="control">
                      <input
                        className="input is-medium is-link"
                        type="text"
                        name="title"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Description</label
                    >
                    <div className="control">
                      <textarea
                        className="textarea is-medium is-link"
                        name="description"></textarea>
                    </div>
                  </div>
                </div>
                <div className="tile is-child px-4">
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Price</label
                    >
                    <div className="control">
                      <input
                        className="input is-medium is-link"
                        type="text"
                        name="price"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Company</label
                    >
                    <div className="control">
                      <input
                        className="input is-medium is-link"
                        type="text"
                        name="company"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Ratings</label
                    >
                    <div className="control">
                      <input
                        className="input is-medium is-link"
                        type="text"
                        name="ratings"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium" for=""
                    >Add Image</label
                    >
                    <div className="control">
                      <input
                        className="input is-medium is-link"
                        type="file"
                        name="image"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field p-5">
                <button
                  className="button is-link has-text-weight-bold is-medium"
                  type="submit">Submit</button
                >
                <button
                  className="button is-danger has-text-weight-bold is-medium mx-4"
                  type="reset">Cancel</button
                >
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
