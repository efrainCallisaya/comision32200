
function escribirProductosHTML (arrayProductos, columnas=3) {
    const productosHTML = document.getElementById("productos");
    if (!arrayProductos.length){
        productosHTML.innerText = "NO HAY PRODUCTOS PARA MOSTRAR"
        return
    }
    arrayProductos.forEach((producto) => {
        let contenedor = document.createElement("div");
        contenedor.className = `col-xl-${columnas} col-lg-${columnas} col-sm-6`

        contenedor.innerHTML = `<!-- PRODUCT ${producto.id}-->
                        <div class="product text-center">
                        <div class="mb-3 position-relative">
                            <div class="badge text-black badge-primary">${(producto.stock > 0) ? "DISPONIBLE" : "AGOTADO"}</div><a id="detalle-${producto.id}" class="d-block" href="detalle.html"><img class="img-fluid w-100" src="${producto.foto}" alt="${producto.nombre}"></a>
                            <div class="product-overlay">
                            <ul class="mb-0 list-inline">
                                <li class="list-inline-item m-0 p-0"><a id="agregarProducto-${producto.id}" class="btn btn-sm btn-dark" href="#">Agregar al carrito</a></li>
                                <li class="list-inline-item me-0"><a class="btn btn-sm btn-outline-dark" href="#productView-${producto.id}" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        <h6 class="reset-anchor"> <a  href="#productView-${producto.id}" data-bs-toggle="modal">${producto.nombre}</a></h6>
                        <p class="small text-muted">$${producto.precio}.-</p>
                                </div>`;
        productosHTML.appendChild(contenedor);

        const agregarProducto = document.getElementById(`agregarProducto-${producto.id}`);

        agregarProducto.addEventListener("click", async () => {
            await addProductCartAPI(idCart, Number(producto.id), 1);
            await renderSidebarCart();
        });

        const detalle = document.getElementById(`detalle-${producto.id}`);
        
        detalle.addEventListener("click", () => {
            localStorage.setItem("detalle-id", producto.id);
        })
    })
}
function escribirModalesHTML (arrayProductos){
    const modales = document.getElementById("modales");
    if (!arrayProductos.length) return;
    arrayProductos.forEach((producto) => {
        let contenedor = document.createElement("div");
        contenedor.className = "modal fade"
        contenedor.id = `productView-${producto.id}`
        contenedor.tabIndex = "-1"
        contenedor.role = "dialog"
        contenedor.ariaHidden = "true"
  
        contenedor.innerHTML = `<!-- modal producto-${producto.id}-->
                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body p-0">
                                            <div class="row align-items-stretch">
                                                <div class="col-lg-6 p-lg-0">
                                                    <a class="product-view d-block h-100 bg-cover bg-center" style="background: url(${producto.foto})" href="${producto.foto}" data-lightbox="productview-${producto.id}" title="${producto.nombre}"></a>
                                                </div>
                                                <div class="col-lg-6">
                                                    <button class="btn-close p-4" type="button" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                                                        <div class="p-5 my-md-4">
                                                            <ul class="list-inline mb-2">
                                                                <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
                                                            </ul>
                                                            <h2 class="h4">${producto.nombre}</h2>
                                                            <p class="text-muted">$${producto.precio}.-</p>
                                                            <p class="text-small mb-4">${producto.descripcion}</p>
                                                                <div class="row align-items-stretch mb-4">
                                                                    <div class="col-sm-7 pr-sm-0">
                                                                        <div class="d-flex align-items-center justify-content-between p-1 border"><span class="small text-uppercase text-gray me-4 no-select">Cantidad</span>
                                                                            <div class="quantity">
                                                                            <button class="dec-btn p-0"><i class="fas fa-caret-left"></i></button>
                                                                            <input id="cantidad-modal-${producto.id}" class="form-control border-0 shadow-0 p-0" type="text" value="1">
                                                                            <button class="inc-btn p-0"><i class="fas fa-caret-right"></i></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-5 pl-sm-0"><a id="agregarProducto-${producto.id}-modal" class="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0">Agregar al carrito</a></div>
                                                                </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
        modales.appendChild(contenedor);

        QuantityEvent(contenedor);

        document.querySelector(`#agregarProducto-${producto.id}-modal`).addEventListener("click", async ()=>{
            const cantidad = parseInt(document.querySelector(`#cantidad-modal-${producto.id}`).value);
            await addProductCartAPI(idCart, Number(producto.id), cantidad);
            await renderSidebarCart();
        })
})
}