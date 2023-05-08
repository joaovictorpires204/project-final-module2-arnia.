import S from '../../assets/styles/handbook-styles/timelinestyle'
import { Handbook } from '../../components/handbook'
import { Infos } from '../../components/handbook/info'
import { Token } from '../../components/handbook/token'
import { TimelineBar } from '../../components/navbar'
import { ServicesHandBook } from '../../components/handbook/serviceshandbook'
import { TimelinePost } from '../../components/timeline-posts'
import { ListAnnex } from '../../components/timeline-posts/annex/annex'

export const Timeline = () => {
  return (
    <S.Container>
      <TimelineBar />
      <S.Content>
        <div>
          <Handbook>
            <Token />
          </Handbook>
          <Handbook>
            <Infos
              title="Demandas e objetivos"
              text="No dia 12 de fevereiro de 2015, a paciente Ana, 22 anos, solteira e residente na cidade de Manaus, procurou atendimento psicológico em virtude de estar apresentando..."
            />
          </Handbook>
          <Handbook>
            <Infos
              title="Anotações pessoais"
              text="Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento da paciente. Tal como: inquietação e medos."
            />
          </Handbook>
        </div>
        <div>
          <ServicesHandBook />
          <TimelinePost
            line="#00995D"
            border="#00995D"
            circle="#00995D"
            title="Sessão 01"
            data="22 de setembro de 2022"
            text="A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante... Ver mais"
          />
          <TimelinePost
            line="#2F80ED"
            border="#2F80ED"
            circle="#2F80ED"
            title="Fato Relevante"
            data="15 de setembro de 2022"
            text="Cliente não compareceu."
          />
          <TimelinePost
            line="#9D28AC"
            border="#9D28AC"
            circle="#9D28AC"
            title="Documentos Importantes"
            data="10 de setembro de 2022"
            text="Anexo hoje alguns documentos importantes sobre as consultas recentes da paciente Ana Ester Resende. Documentos para serem consultados posteriormente, caso necessário."
          />
          <TimelinePost 
            line="#EA1E61"
            border="#EA1E61"
            circle="#EA1E61"
            title="Avaliação Psicológica"
            data="01 de setembro de 2022"
          >
            <ListAnnex />
          </TimelinePost>
        </div>
      </S.Content>
    </S.Container>
  )
}
