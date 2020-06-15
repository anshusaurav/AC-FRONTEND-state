import React from 'react'
import shortid from 'shortid'
class Accordian extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [
        {
          title: 'HTML',
          key: shortid.generate(),
          content:
            'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
          isVisible: false,
        },
        {
          title: 'CSS',
          key: shortid.generate(),
          content:
            'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts',
          isVisible: false,
        },
        {
          title: 'Javascript',
          key: shortid.generate(),
          content:
            'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
          isVisible: false,
        },
        {
          title: 'Node',
          key: shortid.generate(),
          content:
            'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts',
          isVisible: false,
        },
        {
          title: 'React',
          key: shortid.generate(),
          content:
            'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
          isVisible: false,
        },
      ],
    }
  }

  toggleArticle = event => {
    let targetKey =
      event.target.parentNode.parentNode.dataset.id;
    let tempState = {...this.state};
    tempState.articles[targetKey].isVisible = !tempState
      .articles[targetKey].isVisible;
    this.setState(tempState);
  }
  render () {
    return (
      <div className="accordianCont">
        <ul className="articleList">
          {this.state.articles.map((article, index) => {
            return (
              <li
                key={article.key.toString()}
                data-id={index}
              >
                <div
                  className={
                    article.isVisible
                      ? 'article-grid green'
                      : 'article-grid orange'
                  }
                >
                  <p className="articleTitle">
                    {article.title}
                  </p>
                  <button
                    className={
                      article.isVisible
                        ? 'deselect articleBtn'
                        : 'select articleBtn'
                    }
                    onClick={this.toggleArticle}
                  >
                    {article.isVisible ? 'Hide' : 'Show'}
                  </button>
                </div>
                <p
                  className={
                    article.isVisible
                      ? 'contentP artVisible'
                      : 'contentP artInvisible'
                  }
                >
                  {article.content}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default Accordian
