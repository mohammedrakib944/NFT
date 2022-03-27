import "./create.css";

export default function Create() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h4>Upload Your Asset</h4>
          <hr />
          <form>
            <input
              className="form-control inputs"
              type="text"
              placeholder="Asset Name"
            />
            <textarea
              rows="5"
              className="form-control inputs"
              placeholder="Asset Description"
            ></textarea>
            <input
              className="form-control inputs"
              type="text"
              placeholder="Asset Price in ETH"
            />
            <div class="mb-3">
              <input class="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Create Digital Asset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
