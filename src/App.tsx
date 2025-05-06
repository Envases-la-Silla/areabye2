import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function toggleMenu(menuId, event = null) {
    // Obtener el elemento del menú principal (menu-item) que contiene el submenu
    const menuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menuId}')"]`);

    // Alternar la clase 'open' en el menu-item para la rotación de la flecha
    if (menuItem) {
        menuItem.classList.toggle('open');
    }

    // Cerrar todos los submenús del mismo nivel excepto el que se está abriendo
    document.querySelectorAll('.submenu').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Cerrar todos los submenús2 excepto el que se está abriendo
    document.querySelectorAll('.submenu2').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre (si aplica)
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Cerrar todos los submenús3 excepto el que se está abriendo
    document.querySelectorAll('.submenu3').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre (si aplica)
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Cerrar todos los submenús4 excepto el que se está abriendo
    document.querySelectorAll('.submenu4').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre (si aplica)
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Alterna la clase 'active' en el submenú seleccionado
    let menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('active');
    }

    // Evita que el evento de clic se propague y cierre todos los submenús
    if (event) {
        event.stopPropagation();
    }
}
  return (
    <>

    <div class="menu">
		
		<div class="menu-item" onclick="toggleMenu('clientes')">Clientes <span class="arrow">▶</span></div>
		
        <div id="clientes" class="submenu">
		
            <div class="menu-item2" onclick="toggleMenu2('clientes2')">Clientes <span class="arrow">▶</span></div>


				<div id="clientes2" class="submenu2">
					<div class="menu-item3" onclick="mostrarMensaje('Alta')">Alta</div>
					<div class="menu-item3" onclick="mostrarMensaje('Baja')">Baja</div>
					<div class="menu-item3" onclick="mostrarMensaje('Consulta')">Consulta</div>
					<div class="menu-item3" onclick="mostrarMensaje('Modificacion')">Modificacion</div>
				</div>
			
            <div class="menu-item2" onclick="toggleMenu2('personal')">Personal <span class="arrow">▶</span></div>
				<div id="personal" class="submenu2">
					<div class="menu-item4" onclick="toggleMenu3('compras_menu')">Compras <span class="arrow">▶</span></div>
						<div id="compras_menu" class="submenu3">
							<div class="menu-item3">Alta</div>
							<div class="menu-item3">Baja</div>
							<div class="menu-item3">Consulta</div>
							<div class="menu-item3">Modificacion</div>
						</div>
					
					<div class="menu-item4" onclick="toggleMenu3('pagos_menu')">Pagos <span class="arrow">▶</span></div>
						<div id="pagos_menu" class="submenu3">
							<div class="menu-item3">Alta</div>
							<div class="menu-item3">Baja</div>
							<div class="menu-item3">Consulta</div>
							<div class="menu-item3">Modificacion</div>
						</div>
						
					<div class="menu-item4" onclick="toggleMenu3('alma_menu')">Almacen <span class="arrow">▶</span></div>
						<div id="alma_menu" class="submenu3">
							<div class="menu-item3">Alta</div>
							<div class="menu-item3">Baja</div>
							<div class="menu-item3">Consulta</div>
							<div class="menu-item3">Modificacion</div>
						</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('cte-prod')">Cliente-Producto <span class="arrow">▶</span></div>
				<div id="cte-prod" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('oc-cte')">Orden de Compra <span class="arrow">▶</span></div>
				<div id="oc-cte" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('cambio-precio')">Cambio de Precio </div>
			
			<div class="menu-item2" onclick="toggleMenu2('remisiones')">Captura Remisiones <span class="arrow">▶</span></div>
				<div id="remisiones" class="submenu2">
					<div class="menu-item3">Con Factura</div>
					<div class="menu-item3">Sin factura</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('facturas')">Facturas </div>
			
			<div class="menu-item2" onclick="toggleMenu2('pagos')">Pagos <span class="arrow">▶</span></div>
				<div id="pagos" class="submenu2">
					<div class="menu-item3">Con Factura</div>
					<div class="menu-item3">Sin factura</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('reportes')">Reportes <span class="arrow">▶</span></div>
				<div id="reportes" class="submenu2">
					<div class="menu-item3">Cuentas por Cobrar</div>
					<div class="menu-item3">Movimientos del dia</div>
					<div class="menu-item3">Resumen de Cobranza</div>
					<div class="menu-item3">Consulta de Remisiones</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('consulta-papeleria')">Consulta Papeleria <span class="arrow">▶</span></div>
				<div id="consulta-papeleria" class="submenu2">
					<div class="menu-item3">Entregar Pedido</div>
					<div class="menu-item3">Meter Factura a Revision</div>
				</div>
			
        </div>
		
		
		<div class="menu-item" onclick="toggleMenu('proveedores')">Proveedores <span class="arrow">▶</span></div>
        <div id="proveedores" class="submenu">
            <div class="menu-item2" onclick="toggleMenu2('proveedores2')">Proveedores <span class="arrow">▶</span></div>
				<div id="proveedores2" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
				
            <div class="menu-item2" onclick="toggleMenu2('prov-prod')">Proveedor-Producto <span class="arrow">▶</span></div>
				<div id="prov-prod" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
				
			<div class="menu-item2" onclick="toggleMenu2('div-prov')">Divisiones de Proveedores <span class="arrow">▶</span></div>
				<div id="div-prov" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
				
			<div class="menu-item2" onclick="toggleMenu2('oc-prov')">Orden de Compra <span class="arrow">▶</span></div>
				<div id="oc-prov" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
				
			<div class="menu-item2" onclick="toggleMenu2('compras')">Compras </div>
			
			<div class="menu-item2" onclick="toggleMenu2('pagos')">Pagos </div>
			
			<div class="menu-item2" onclick="toggleMenu2('repo-cxp')">Reportes <span class="arrow">▶</span></div>
				<div id="repo-cxp" class="submenu2">
					<div class="menu-item3">Cuentas por Pagar</div>
				</div>
        </div>
        
		<div class="menu-item" onclick="toggleMenu('rh')">Recursos Humanos <span class="arrow">▶</span></div>
		<div id="rh" class="submenu">
			<div class="menu-item2" onclick="toggleMenu2('empleados')">Empleados <span class="arrow">▶</span></div>
				<div id="empleados" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
				
			<div class="menu-item2" onclick="toggleMenu2('puestos')">Puestos <span class="arrow">▶</span></div>
				<div id="puestos" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('asistencia')">Asistencia <span class="arrow">▶</span></div>
				<div id="asistencia" class="submenu2">
					<div class="menu-item3">Barrec Escobedo</div>
					<div class="menu-item3">Barrec Guadalupe</div>
					<div class="menu-item3">Elsi Monterrey</div>
				</div>
			
			<div class="menu-item2" onclick="toggleMenu2('nomina')">Nomina Semanal <span class="arrow">▶</span></div>
				<div id="nomina" class="submenu2">
					<div class="menu-item3">Barrec Escobedo</div>
					<div class="menu-item3">Barrec Guadalupe</div>
					<div class="menu-item3">Elsi Monterrey</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('aguinaldos')">Aguinaldos <span class="arrow">▶</span></div>
				<div id="aguinaldos" class="submenu2">
					<div class="menu-item3">Barrec Escobedo</div>
					<div class="menu-item3">Barrec Guadalupe</div>
					<div class="menu-item3">Elsi Monterrey</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('vacaciones')">Vacaciones <span class="arrow">▶</span></div>
				<div id="vacaciones" class="submenu2">
					<div class="menu-item3">Barrec Escobedo</div>
					<div class="menu-item3">Barrec Guadalupe</div>
					<div class="menu-item3">Elsi Monterrey</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('liquidaciones')">Liquidaciones <span class="arrow">▶</span></div>
				<div id="liquidaciones" class="submenu2">
					<div class="menu-item3">Barrec Escobedo</div>
					<div class="menu-item3">Barrec Guadalupe</div>
					<div class="menu-item3">Elsi Monterrey</div>
				</div>
			
		</div>
		
		<div class="menu-item" onclick="toggleMenu('barrec')">Barrec <span class="arrow">▶</span></div>
		<div id="barrec" class="submenu">
			<div class="menu-item2" onclick="toggleMenu2('generadores')">Generadores <span class="arrow">▶</span></div>
				<div id="generadores" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('prod-rp')">Productos RP <span class="arrow">▶</span></div>
				<div id="prod-rp" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('gen-prod-rp')">Generador-Producto RP <span class="arrow">▶</span></div>
				<div id="gen-prod-rp" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('transportistas')">Transportistas <span class="arrow">▶</span></div>
				<div id="transportistas" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('operadores')">Operadores <span class="arrow">▶</span></div>
				<div id="operadores" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('camiones')">Camiones <span class="arrow">▶</span></div>
				<div id="camiones" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
					<div class="menu-item3">Carga de Gas/Gasolina</div>
					<div class="menu-item3">Mantenimiento</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('destinatarios')">Destinatarios <span class="arrow">▶</span></div>
				<div id="destinatarios" class="submenu2">
					<div class="menu-item3">Alta</div>
					<div class="menu-item3">Baja</div>
					<div class="menu-item3">Consulta</div>
					<div class="menu-item3">Modificacion</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('manifiestos')">Manifiestos <span class="arrow">▶</span></div>
				<div id="manifiestos" class="submenu2">
					<div class="menu-item3">Hacer</div>
					<div class="menu-item3">Llenar</div>
					<div class="menu-item3">Consultar</div>
					<div class="menu-item3">De Nosotros</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('entradas')">Otras Entradas </div>
			
			<div class="menu-item2" onclick="toggleMenu2('maquilas')">Maquilas <span class="arrow">▶</span></div>
				<div id="maquilas" class="submenu2">
					<div class="menu-item3">Entradas</div>
					<div class="menu-item3">Saldo</div>
					<div class="menu-item3">Historial</div>
				</div>
			<div class="menu-item2" onclick="toggleMenu2('ternium')">Ternium <span class="arrow">▶</span></div>
				<div id="ternium" class="submenu2">
					<div class="menu-item4" onclick="toggleMenu3('capturas_ternium')">Capturas <span class="arrow">▶</span></div>
						<div id="capturas_ternium" class="submenu3">
							<div class="menu-item3">Confirmacion de Pedido</div>
							<div class="menu-item3">ODE</div>
							<div class="menu-item3">Carta</div>
							<div class="menu-item3">Manifiesto</div>
							<div class="menu-item3">Factura</div>
							<div class="menu-item3">Pagos</div>
						</div>
					
					<div class="menu-item4" onclick="toggleMenu3('reportes_ternium')">Reportes <span class="arrow">▶</span></div>
						<div id="reportes_ternium" class="submenu3">
							<div class="menu-item3">Confirmacion de Pedido con Saldo</div>
							<div class="menu-item3">ODE con Saldo</div>
							<div class="menu-item3">Saldo en Pesos</div>
						</div>
						
					<div class="menu-item4" onclick="toggleMenu3('cancelaciones_ternium')">Cancelaciones <span class="arrow">▶</span></div>
						<div id="cancelaciones_ternium" class="submenu3">
							<div class="menu-item3">Confirmacion de Pedido</div>
							<div class="menu-item3">ODE</div>
							<div class="menu-item3">Carta</div>
						</div>
				</div>
		</div>
		
		<div class="menu-item" onclick="toggleMenu('elsi')">Elsi <span class="arrow">▶</span></div>
		
		<div class="menu-item" onclick="toggleMenu('gerencia')">Gerencia <span class="arrow">▶</span></div>
		<div id="gerencia" class="submenu2">
					<div class="menu-item2" onclick="toggleMenu3('reportes_gerencia')">Reportes <span class="arrow">▶</span></div>
						<div id="reportes_gerencia" class="submenu3">
							<div class="menu-item3">Cuentas por Cobrar</div>
							<div class="menu-item3">Cuentas por Pagar</div>
							<div class="menu-item3">Estadistica de Ventas</div>
							<div class="menu-item3">Historial por Cliente</div>
							<div class="menu-item3">Resumen por Cobrar y Pagar</div>
							<div class="menu-item3">IVA Ahorrado</div>
							<div class="menu-item3">Ventas VS Cobranza</div>
							<div class="menu-item3">IVA y Cobrado/Gastado</div>
							<div class="menu-item3">IVA Mensual</div>
							<div class="menu-item3">Consecutivo de Remisiones</div>
						</div>
					
					<div class="menu-item2" onclick="toggleMenu3('bancos')">Bancos <span class="arrow">▶</span></div>
						<div id="bancos" class="submenu3">
							<div class="menu-item4" onclick="toggleMenu4('bancos2')">Bancos <span class="arrow">▶</span></div>
								<div id="bancos2" class="submenu4">
									<div class="menu-item3">Alta</div>
									<div class="menu-item3">Baja</div>
									<div class="menu-item3">Consulta</div>
									<div class="menu-item3">Modificacion</div>
									<div class="menu-item3">Tipos de Operaciones</div>
								</div>
							<div class="menu-item4">Movimientos Diarios</div>
							<div class="menu-item4" onclick="toggleMenu4('reportes_bancos')">Reportes <span class="arrow">▶</span></div>
								<div id="reportes_bancos" class="submenu4">
									<div class="menu-item3">Saldo en Bancos</div>
									<div class="menu-item3">Por Dia</div>
									<div class="menu-item3">Por Periodo</div>
									<div class="menu-item3">Consiliacion</div>
									<div class="menu-item3">Adeudo a Accionistas</div>
									<div class="menu-item3">Saldo JVG</div>
								</div>
						</div>
						
					<div class="menu-item2" onclick="toggleMenu3('valspar')">Valspar <span class="arrow">▶</span></div>
						<div id="valspar" class="submenu3">
							<div class="menu-item3">Remisiones Pendientes de Facturar</div>
							<div class="menu-item3">Pago de Comisiones</div>
						</div>
					<div class="menu-item2" onclick="toggleMenu3('inventario')">Captura Inventario Fisico </div>
				</div>
		
		<div class="menu-item" onclick="toggleMenu('sistemas')">Sistemas <span class="arrow">▶</span></div>
		
    </div>
                <div className="card">
                     </div>
          </>
  )   		       
}

export default App
