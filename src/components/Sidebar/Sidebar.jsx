import { LayoutDashboard, Receipt, PieChart, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className='sidebar d-flex flex-column'>
      <div className="d-flex align-items-center mb-5 mt-2">
        <div className="bg-primary text-white rounded p-2 me-3 d-flex align-items-center justify-content-center">
          <Receipt size={24} />
        </div>
        <h4 className="m-0 fw-bold">Financeiro</h4>
      </div>

      <div className="d-flex flex-column gap-2 flex-grow-1">
        <button className="btn text-start d-flex align-items-center gap-3 fw-medium" style={{ background: 'var(--bg-main)', color: 'var(--primary)', border: 'none', borderRadius: '10px', padding: '10px 15px' }}>
          <LayoutDashboard size={20} /> <span style={{fontSize: '15px'}}>Dashboard</span>
        </button>
        <button className="btn text-start d-flex align-items-center gap-3 fw-medium text-muted bg-transparent border-0" style={{ padding: '10px 15px' }}>
          <Receipt size={20} /> <span style={{fontSize: '15px'}}>Transações</span>
        </button>
        <button className="btn text-start d-flex align-items-center gap-3 fw-medium text-muted bg-transparent border-0" style={{ padding: '10px 15px' }}>
          <PieChart size={20} /> <span style={{fontSize: '15px'}}>Relatórios</span>
        </button>
      </div>

      <div className="d-flex flex-column gap-2 mt-auto pt-4 border-top">
        <button className="btn text-start d-flex align-items-center gap-3 fw-medium text-muted bg-transparent border-0" style={{ padding: '10px 15px' }}>
          <Settings size={20} /> <span style={{fontSize: '15px'}}>Configurações</span>
        </button>
        <button className="btn text-start d-flex align-items-center gap-3 fw-medium text-danger-custom bg-transparent border-0" style={{ padding: '10px 15px' }}>
          <LogOut size={20} /> <span style={{fontSize: '15px'}}>Sair</span>
        </button>
      </div>
    </div>
  );
}
