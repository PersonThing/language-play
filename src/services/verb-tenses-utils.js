export const strip = inf => inf.substring(0, inf.length - 2)
export const participio = inf => strip(inf) + (inf.endsWith('ar') ? 'ado' : 'ido')
