import ProTable, { ProColumns, ProTableProps, ColumnsState } from './Table';
import IndexColumn from './component/indexColumn';
import TableDropdown from './component/dropdown';
import TableStatus from './component/status';
import defaultRenderText, { ProColumnsValueType } from './defaultRender';

export type { ProTableProps, ColumnsState, ProColumnsValueType, ProColumns };

export { IndexColumn, TableDropdown, TableStatus, defaultRenderText };

export default ProTable;
