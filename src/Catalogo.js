import React from 'react';

const headers = ['Codigo','Nombre', 'Precio Publico', 'Precio Distribuidor', 'Lote', 'Fecha de caducidad' ];
const products = [
  { Id: 1, Codigo: 'AGR007', Nombre: 'ADENGO DE 350 ML', Precio1: 1600, Precio2: 1455, Lote: 'AD350-210328-001', Fechacad: '20/oct/2024' },
  { Id: 2, Codigo: 'AGR009', Nombre: 'AGRAMINA 480 DE 1 LT.  (6%)', Precio1:  190, Precio2: 173, Lote: 'AG480-210328-001 ', Fechacad: '05/oct/2024' },
  { Id: 3, Codigo: 'AGR019', Nombre: 'AGROMIL PLUS DE .250 ML', Precio1: 325, Precio2: 295, Lote: 'AP250-210328-002', Fechacad: '20/oct/2026' },
  { Id: 4, Codigo: 'AGR029', Nombre: 'ATERMIX FW DE 1 LT  (6%)', Precio1: 345, Precio2: 314, Lote: 'ATFW-210328-003', Fechacad: '13/oct/2024' },
  { Id: 5, Codigo: 'AGR056', Nombre: 'COLOSO TOTAL 360 DE 1 LT.', Precio1: 850, Precio2: 773, Lote: 'CT360-210328-010', Fechacad: '06/oct/2024' },
  { Id: 6, Codigo: 'AGR060', Nombre: 'COMET DE 2 KGS.', Precio1: 120, Precio2: 109, Lote: 'CMTK2-230328-050', Fechacad: '20/oct/2025' },
  { Id: 7, Codigo: 'AGR061', Nombre: 'CONFIDOR BLUE SC350 DE 1 LT  (6%)', Precio1: 1350, Precio2: 1227, Lote: 'CFDR1-210430-012', Fechacad: '10/nov/2026' },
  { Id: 8, Codigo: 'AGR114', Nombre: 'FOLEY 500 MICRO DE 950 ML (7%)', Precio1: 470, Precio2: 427, Lote: 'FLYMC-220227-008', Fechacad: '20/oct/2027' },
  { Id: 9, Codigo: 'AGR165', Nombre: 'KELATEX FIERRO FORTE DE 1 KGS.', Precio1: 445, Precio2: 405, Lote: 'KLXFE-210305-003', Fechacad: '20/oct/2032' },
  { Id: 10, Codigo: 'AGR175', Nombre: 'MAINSTAY CALCIUM DE 20 LTS', Precio1: 145, Precio2: 132, Lote: 'MNCAL-220109-008', Fechacad: '07/oct/2024' },
  { Id: 11, Codigo: 'AGR193', Nombre: 'MULTISAL 12-60-0 DE 1 KGS', Precio1: 536, Precio2: 487, Lote: 'MLSKG-221020-011', Fechacad: '20/oct/1931' },
  { Id: 12, Codigo: 'AGR196', Nombre: 'MURALLA MAX DE 250 ML  (6%)', Precio1: 536, Precio2: 487, Lote: 'MMXML-221011-112', Fechacad: '11/oct/2024' },
  { Id: 13, Codigo: 'AGR210', Nombre: 'PAQUETE CALLISTO-COQUILLO.  (6%)', Precio1: 900, Precio2: 818, Lote: 'PQCCQ-221012-024', Fechacad: '12/oct/2024' },
  { Id: 14, Codigo: 'AGR259', Nombre: 'RAIZAL 400 DE 1 KG.', Precio1: 299, Precio2: 272, Lote: 'RZ400-221028-014', Fechacad: '28/oct/2030' },
  { Id: 15, Codigo: 'AGR260', Nombre: 'RAIZONE PLUS DE .350 GRS.', Precio1: 155, Precio2: 141, Lote: 'RZPGR-211008-008', Fechacad: '08/oct/2024' },
  { Id: 16, Codigo: 'AGR265', Nombre: 'RIDOMIL GOLD 480SL DE 250 ML.  (6%)', Precio1: 1650, Precio2: 1500, Lote: 'RMGML-220920-015', Fechacad: '20/sep/2025' },
  { Id: 17, Codigo: 'AGR266', Nombre: 'RIDOMIL GOLD BRAVO LIQUID SC. DE 1 LT  (6%)', Precio1: 5800, Precio2: 5273, Lote: 'RDMLT-220430-042', Fechacad: '30/abr/2028' },
  { Id: 18, Codigo: 'AGR271', Nombre: 'ROOTING DE .250 ML.', Precio1: 299, Precio2: 272, Lote: 'ROTLT-221009-054', Fechacad: '09/oct/2024' },
  { Id: 19, Codigo: 'INT118', Nombre: 'COMEDERO REJILLAS PLASTICO DE 23 CMS  (16%)', Precio1: 1699, Precio2: 1545, Lote: 'CRP23-210528-096', Fechacad: '28/may/2029' },
  { Id: 20, Codigo: 'MVT314', Nombre: 'TIMPAKAPS DE 475 ML.', Precio1: 379, Precio2: 345, Lote: 'TPKML-221022-115', Fechacad: '19/oct/2024' },
  { Id: 21, Codigo: 'SEM004', Nombre: 'BETABEL EARLY WONDER 1 LB *USD*', Precio1: 550, Precio2: 500, Lote: 'WNBLB-220620-075', Fechacad: '20/jun/2028' },
  { Id: 22, Codigo: 'SEM005', Nombre: 'CALABACITA 7464 HY (SEMINIS) *USD*', Precio1: 4000, Precio2: 3636, Lote: 'SECHY-221017-017', Fechacad: '17/oct/2024' },
  { Id: 23, Codigo: 'SEM009', Nombre: 'CALABACITA GREY ZUCCHINI (ETERNO) *USD*', Precio1: 4500, Precio2: 4091, Lote: 'ETCAG-220615-015', Fechacad: '15/jun/2027' },
  { Id: 24, Codigo: 'SEM029', Nombre: 'MAIZ N83-N5  (SPC) MED TRA. 60 MI. SEM', Precio1: 3900, Precio2: 3545, Lote: 'N83N5-220312-003', Fechacad: '30/oct/2026' },
  { Id: 25, Codigo: 'SEM050', Nombre: 'MAIZ XR-66 CERES C/T 50,000 SEM', Precio1: 2300, Precio2: 2091, Lote: 'CRS66-230115-001', Fechacad: '20/oct/2027' },
  { Id: 26, Codigo: 'SEM055', Nombre: 'PASTO RHODES PIONNER (10 KGS)', Precio1: 2450, Precio2: 2227, Lote: 'PARDX-220623-075', Fechacad: '14/oct/2024' },
  { Id: 27, Codigo: 'SEM059', Nombre: 'PASTO TANZANIA MAXIMUM 1 KG.', Precio1: 849, Precio2: 772, Lote: 'PATMX-221101-009', Fechacad: '16/oct/2024' },
  { Id: 28, Codigo: 'SEM066', Nombre: 'REVOLTURA PARA PAJARO DE 1 KG*', Precio1: 80, Precio2: 73, Lote: 'RPP1K-230130-001', Fechacad: '18/oct/2024' },
  { Id: 29, Codigo: 'SEM068', Nombre: 'SANDIA PEACOCK (ETERNO) *USD*', Precio1: 8000, Precio2: 7273, Lote: 'SMSPK-221031-078', Fechacad: '15/oct/2024' },
  { Id: 30, Codigo: 'SEM069', Nombre: 'SANDIA SANGRIA (ROGERS) *USD*', Precio1: 9850, Precio2: 8955, Lote: 'SMSLB-220815-033', Fechacad: '20/oct/2026' },
];

const ProductCatalog = () => {
  return (
    <div className='Encabezado'>
      <h2>Catalogo de Productos</h2>
      
      <table className='my-table'>  
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
              <td>{product.Lote}</td>
              <td>{product.Fechacad}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCatalog;
