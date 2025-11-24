import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const BasicPagination: React.FC<Props> = (props) => {
  const { page, totalPages, onPageChange } = props;
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => onPageChange(value)}
        color="primary"
      />
    </Stack>
  );
};
