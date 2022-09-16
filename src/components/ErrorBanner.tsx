import { Box } from "./BaseElements";

interface ErrorBannerProps {
  message: string;
  show: boolean;
}

const ErrorBanner = ({ message, show }: ErrorBannerProps) => (
  <>
    {show && (
      <Box
        css={{
          padding: "$3 $8",
          backgroundColor: "$red9",
          borderRadius: "$base",
          textAlign: "center",
          fontSize: "small"
        }}
      >
        <p>{message}</p>
      </Box>
    )}
  </>
);

export default ErrorBanner;
