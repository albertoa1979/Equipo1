import React from 'react';

const headers = ['Codigo','Nombre', 'Precio Publico', 'Precio Distribuidor' ];
const products = [
  { Id: 1, Codigo: 'AGR007', Nombre: 'ADENGO DE 350 ML', Precio1: 250, Precio2: 200 },
  { Id: 2, Codigo: 'AGR009', Nombre: 'AGRAMINA 480 DE 1 LT.  (6%)', Precio1: 299, Precio2: 259 },
  { Id: 3, Codigo: 'AGR019', Nombre: 'AGROMIL PLUS DE .250 ML', Precio1: 252, Precio2: 230 },
  { Id: 4, Codigo: 'AGR029', Nombre: 'ATERMIX FW DE 1 LT  (6%)', Precio1: 240, Precio2: 200 },
  { Id: 5, Codigo: 'AGR056', Nombre: 'COLOSO TOTAL 360 DE 1 LT.', Precio1: 311, Precio2: 240 },
  { Id: 6, Codigo: 'AGR060', Nombre: 'COMET DE 2 KGS.', Precio1: 287, Precio2: 259 },
  { Id: 7, Codigo: 'AGR061', Nombre: 'CONFIDOR BLUE SC350 DE 1 LT  (6%)', Precio1: 250, Precio2: 200 },
  { Id: 8, Codigo: 'AGR114', Nombre: 'FOLEY 500 MICRO DE 950 ML (7%)', Precio1: 250, Precio2: 200 },
  { Id: 9, Codigo: 'AGR165', Nombre: 'KELATEX FIERRO FORTE DE 1 KGS.', Precio1: 250, Precio2: 200 },
  { Id: 10, Codigo: 'AGR175', Nombre: 'MAINSTAY CALCIUM DE 20 LTS', Precio1: 250, Precio2: 200 },
  { Id: 11, Codigo: 'AGR193', Nombre: 'MULTISAL 12-60-0 DE 1 KGS', Precio1: 250, Precio2: 200 },
  { Id: 12, Codigo: 'AGR196', Nombre: 'MURALLA MAX DE 250 ML  (6%)', Precio1: 250, Precio2: 200 },
  { Id: 13, Codigo: 'AGR210', Nombre: 'PAQUETE CALLISTO-COQUILLO.  (6%)', Precio1: 250, Precio2: 200 },
  { Id: 14, Codigo: 'AGR259', Nombre: 'RAIZAL 400 DE 1 KG.', Precio1: 250, Precio2: 200 },
  { Id: 15, Codigo: 'AGR260', Nombre: 'RAIZONE PLUS DE .350 GRS.', Precio1: 250, Precio2: 200 },
  { Id: 16, Codigo: 'AGR265', Nombre: 'RIDOMIL GOLD 480SL DE 250 ML.  (6%)', Precio1: 250, Precio2: 200 },
  { Id: 17, Codigo: 'AGR266', Nombre: 'RIDOMIL GOLD BRAVO LIQUID SC. DE 1 LT  (6%)', Precio1: 250, Precio2: 200 },
  { Id: 18, Codigo: 'AGR271', Nombre: 'ROOTING DE .250 ML.', Precio1: 250, Precio2: 200 },
  { Id: 19, Codigo: 'INT118', Nombre: 'COMEDERO REJILLAS PLASTICO DE 23 CMS  (16%)', Precio1: 250, Precio2: 200 },
  { Id: 20, Codigo: 'MVT314', Nombre: 'TIMPAKAPS DE 475 ML.', Precio1: 250, Precio2: 200 },
  { Id: 21, Codigo: 'SEM004', Nombre: 'BETABEL EARLY WONDER 1 LB *USD*', Precio1: 250, Precio2: 200 },
  { Id: 22, Codigo: 'SEM005', Nombre: 'CALABACITA 7464 HY (SEMINIS) *USD*', Precio1: 250, Precio2: 200 },
  { Id: 23, Codigo: 'SEM009', Nombre: 'CALABACITA GREY ZUCCHINI (ETERNO) *USD*', Precio1: 250, Precio2: 200 },
  { Id: 24, Codigo: 'SEM029', Nombre: 'MAIZ N83-N5  (SPC) MED TRA. 60 MI. SEM', Precio1: 250, Precio2: 200 },
  { Id: 25, Codigo: 'SEM050', Nombre: 'MAIZ XR-66 CERES C/T 50,000 SEM', Precio1: 250, Precio2: 200 },
  { Id: 26, Codigo: 'SEM055', Nombre: 'PASTO RHODES PIONNER (10 KGS)', Precio1: 250, Precio2: 200 },
  { Id: 27, Codigo: 'SEM059', Nombre: 'PASTO TANZANIA MAXIMUM 1 KG.', Precio1: 250, Precio2: 200 },
  { Id: 28, Codigo: 'SEM066', Nombre: 'REVOLTURA PARA PAJARO DE 1 KG*', Precio1: 250, Precio2: 200 },
  { Id: 29, Codigo: 'SEM068', Nombre: 'SANDIA PEACOCK (ETERNO) *USD*', Precio1: 250, Precio2: 200 },
  { Id: 30, Codigo: 'SEM069', Nombre: 'SANDIA PEACOCK (ETERNO) *USD*', Precio1: 250, Precio2: 200 },
];

const ProductCatalog = () => {
  return (
    <div className='Encabezado'>
      <h2>Catalogo de Productos</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.Id}>
              <td>{product.Codigo}</td>
              <td>{product.Nombre}</td>
              <td>{product.Precio1}</td>
              <td>{product.Precio2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCatalog;
