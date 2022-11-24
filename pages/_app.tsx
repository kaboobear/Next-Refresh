import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from '../utils/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import { MainLayout } from '../layout/MainLayout';

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache,
}

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: Props) {
  return (
    <CacheProvider value={createEmotionCache()}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider> 
    </CacheProvider>
  );
}
