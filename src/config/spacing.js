/**
 * SPACING CONFIGURATION
 * Centralized control for all spacing values in the Dark Room Records Linktree
 * 
 * Usage: Import and use these values in components to maintain consistency
 * Example: className={`gap-${spacing.buttonGap.mobile}`}
 */

export const spacing = {
  // Gap between buttons
  buttonGap: {
    mobile: '4',      // 16px
    tablet: '4',      // 16px
    desktop: '5',     // 20px
    className: 'gap-4 sm:gap-4 md:gap-5'
  },

  // Gap entre o título (DARK ROOM) e o subtítulo (RECORDS)
  // DE: mb-1 (4px) -> PARA: mb-3 (12px)
  // Motivo: Dar identidade própria ao "RECORDS" sem que ele suma sob o título principal.
  titleToRecords: {
    mobile: '3',      // 12px
    tablet: '4',      // 16px
    className: 'mb-3 sm:mb-4'
  },

  // Gap between records and description
  // DE: mt-4 (16px) -> PARA: mt-5 (20px)
  // Motivo: Afastar levemente o bloco de texto para melhorar a legibilidade.
  recordsToDescription: {
    mobile: '5',      // 20px
    tablet: '6',      // 24px
    className: 'mt-5 sm:mt-6'
  },

  // Margin bottom do texto de descrição para os botões
  // DE: mt-64 (256px) -> PARA: mb-6 (24px)
  // Motivo: Ajuste solicitado pelo usuário para reduzir o espaço e usar margin-bottom.
  textToButtons: {
    mobile: '6',      // 24px de espaçamento
    tablet: '8',      // 32px de espaçamento
    desktop: '10',    // 40px de espaçamento
    className: 'mb-6 sm:mb-8 md:mb-10'
  },

  // Gap between logo and title
  logoToTitle: {
    mobile: '6',      // 24px
    tablet: '8',      // 32px
    className: 'mb-6 sm:mb-8'
  },

  // Padding inside buttons
  // DE: p-3 (12px) -> PARA: py-3.5 px-4 
  // Motivo: Os botões estão um pouco "altos" verticalmente em relação ao espaço nas laterais.
  // Se estiver usando Tailwind puro no componente, recomendo separar o padding vertical (py) do horizontal (px).
  buttonPadding: {
    mobile: 'py-3.5 px-4',
    tablet: 'p-4',
    desktop: 'p-4',
    className: 'py-3.5 px-4 sm:p-4 md:p-4'
  },

  // Gap between icon and text inside button
  iconToText: {
    mobile: '2',      // 8px
    tablet: '3',      // 12px
    className: 'gap-2 sm:gap-3'
  },

  // Container padding
  containerPadding: {
    mobile: '3',      // 12px
    tablet: '0',      // 0px
    className: 'px-3 sm:px-0'
  },

  // Footer margin top
  footerMargin: {
    mobile: '12',     // 48px
    tablet: '16',     // 64px
    desktop: '20',    // 80px
    className: 'mt-12 sm:mt-16 md:mt-20'
  }
}

/**
 * QUICK REFERENCE
 * 
 * To adjust spacing:
 * 1. Edit the values above
 * 2. Update the className string to match
 * 3. Run: npm run build
 * 4. Commit and push to GitHub
 * 
 * Tailwind spacing scale:
 * 1 = 4px
 * 2 = 8px
 * 3 = 12px
 * 3.5 = 14px
 * 4 = 16px
 * 5 = 20px
 * 6 = 24px
 * 7 = 28px
 * 8 = 32px
 * 10 = 40px
 * 12 = 48px
 * 16 = 64px
 * 20 = 80px
 */
