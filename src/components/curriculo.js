import { Form, Label, Input, FormGroup, FormText, Row, Col } from "reactstrap";
import { useState } from "react";


export default function Curriculo(){
    const [candidato, setCandidato] = useState(
        {
            firstname:'',
            lastname:'', 
            identificationDocument:'', 
            email:'',    
            birthdate:'', 
            gender:'',
            phoneNumber:'',
            mobileNumber:'',
            disability:'',
            disability_type:'',
            country:'',
            addressZipCode:'',
            state:'',
            city:'',
            addressState:'',
            addressNumber:'',
            course:'',
            level:'',
            status:'',
            institution:'',
            formation:'',
            courseStart:'',
            courseEnd:'',
            startMonth:'',
            startYear:'',
            endMonth:'',
            endYear:'',
            languages:'',
            languages_skill:'',
            role:'',
            companyName:'',
            activitiesPerformed:'',
            area_interest:'',
            linkedinProfileUrl:''
          
        }
        );





    function handleChange(event){

        const target = event.target;
        const value = target.value;
        const name = target.name;
   
        var candidatoAtualizado = {...candidato};
         
        candidatoAtualizado[name] = value;
   
        setCandidato(candidatoAtualizado)
   
 }
 
 
 return(

    <>
            
            <body>
                
            
            <body>
                
                <h6>Dados Pessoais</h6>
                <br />

<Form>    
                <Row>
                <Col>
                        <div className="form-group row">
                            <Label for="firstname" className="col-sm-2.5 col-form-label">Nome </Label>
                            <div className="col-sm-12">
                            <Input type="text" className="form-control" name="firstname" id="firstname" placeholder="Digite o primeiro nome"
                                />
                                
                                <p></p>
                            </div>
                        </div>
                </Col>

                <br/>
                <Col>
                         <div className="form-group row">
                            <Label for="lastname" className="col-sm-2.5 col-form-label">Sobrenome </Label>
                             <div className="col-sm-12">
                            <Input type="text" className="form-control" name="lastname" id="lastname" placeholder="Digite o sobrenome"
                               />
                            </div>
                        </div>
                </Col>
                </Row>

                <br/>

                <Row>
                <Col>  
                        <div className="form-group row">
                             <Label for="identificationDocument" className="col-sm-2.5 col-form-label">CPF</Label>
                            <div className="col-sm-12">
                             <Input type="text" className="form-control" name="identificationDocument" id="identificationDocument" placeholder="Digite o CPF"
                               />
                            </div>
                        </div>
                </Col>

                <br />
                
                <Col>
                        <div className="form-group row">
                             <Label for="email" className="col-sm-2.5 col-form-label">E-mail</Label>
                             <div className="col-sm-12">
                             <Input type="text" className="form-control" name="email" id="email" placeholder="Digite o e-mail"
                               />
                            </div>
                        </div>

                </Col>  
                </Row>

                 <br/>

                <Row>
                <Col>    

                        <div className="form-group row">
                            <Label for="birthdate" className="col-sm-2.5 col-form-label">Data de Nascimento</Label>
                            <div className="col-sm-12">
                            <Input type="date" className="form-control" name="birthdate" id="birthdate"
                               />
                            </div>
                        </div>
                </Col>
           
                <br />

                <Col>
                         <div className="form-group row">
                            <FormGroup tag="fieldset">                    
                            <Label for="gender" className="col-sm-2 col-form-label">Gênero</Label>
                <Row>
                <Col xs="auto">
                            <FormGroup check>
                            <Label check>
                            <Input type="radio" name="gender" />{'Feminino'}
                            </Label>
                            </FormGroup>
                </Col>
                <Col>
                            <FormGroup check>
                            <Label check>
                            <Input type="radio" name="gender" />{'Masculino'}          
                            </Label>
                            </FormGroup>
                </Col>
                </Row>
                            </FormGroup>
                            </div> 
                </Col>
                </Row>

            

            <br/>
            <Row>
            <Col>   
                            <div className="form-group row">
                            <Label for="phoneNumber" className="col-sm-2.5 col-form-label">Telefone</Label>
                            <div className="col-sm-12">
                            <Input type="text" className="form-control" name="phoneNumber" id="phoneNumber" placeholder="Digite o telefone"
                              />
                           </div>
            </div>
            </Col> 

            <br/>

            <Col>
                            <div className="form-group row">
                            <Label for="mobileNumber" className="col-sm-2.5 col-form-label">Celular</Label>
                            <div className="col-sm-12">
                            <Input type="text" className="form-control" name="mobileNumber" id="mobileNumber" placeholder="Digite o celular"
                               />
                            </div>
                            </div>
            </Col>
            </Row>

            <br/>

            <Row>
                <Col>
                         <div className="form-group row">
                            <FormGroup tag="fieldset">                    
                            <Label for="disability" className="col-sm-2.5 col-form-label">Possui alguma deficiência?</Label>
                            
                <Row>
                <Col xs="auto">
                            <FormGroup check>
                            <Label check>
                            <Input type="radio" name="disability" onChange={handleChange} value="Sim"/>{'Sim'}
                            </Label>
                            </FormGroup>
                </Col>
                <Col>
                            <FormGroup check>
                            <Label check>
                            <Input type="radio" name="disability" onChange={handleChange} value="Não"/>{'Não'}          
                            </Label>
                            </FormGroup>
                </Col>
                </Row>
                            </FormGroup>
                            </div> 
                </Col>
            
            <Col>
                    <div className="form-group row">
                    <Label for="disability_type" className="col-sm-2.5 col-form-label">Qual deficiência possui?</Label>
                    <div className="col-sm-12">
                    <Input type="text" className="form-control" name="phoneNumber" id="phoneNumber" placeholder="Digite o telefone"/>
                    </div>
                    </div>
                   
            </Col>         
            </Row>

             
            <br />
            <br />
                  
        
            {/* ENDEREÇO*/}

            <h6>Endereço</h6>

            <br />
           
            

            <Row>
            <Col>
                  
                  <Label className="col-sm-2.5 col-form-label" for="country">País</Label>
                  <div className="col-sm-12">
                  <select className="custom-select localizacao-opcao-cadastro col-form-label" name="country" onChange={handleChange}>
                  <option value="todos">País</option>
                  <option value="brasil">Brasil</option>
                  <option value="USA">USA </option>
                  <option value="Canada">Canada </option>
                  </select>
                  </div>
                  
                  
            </Col> 
            <Col>  
                               
                        <div className="form-group row">
                        <Label for="addressZipCode" className="col-sm-2.5 col-form-label">CEP</Label>
                        <div className="col-sm-12">
                        <Input type="number" className="form-control" name="addressZipCode" id="addressZipCode" placeholder="Digite o CEP"
                           />
                        </div>
                        </div>
                       
            
            </Col> 
            </Row> 

            <br/>

            <Row>
            <Col>

                <Label className="col-sm-2.5 col-form-label" for="state">UF</Label>
                    <div className="col-sm-12">
                    <select className="custom-select localizacao-opcao-cadastro col-form-label" name="state" onChange={handleChange}>
                    <option value="todos">UF</option>
                    <option value="SP">SP </option>
                    <option value="RJ">RJ </option>
                    <option value="MG">MG </option>
                    </select>
                    </div>
                        
            </Col>
            

            <br/>
                    
            
              
            <Col>  

                    <Label className="col-sm-2.5 col-form-label" for="city">Cidade</Label>
                    <div className="col-sm-12">
                    <select className="custom-select localizacao-opcao-cadastro col-form-label" name="city" onChange={handleChange}>
                    <option value="todos">Cidade</option>
                    <option value="Sao Paulo">São Paulo </option>
                    <option value="Rio de Janeiro">Rio de Janeiro </option>
                    <option value="Belo horizonte">Belo horizonte </option>
                    </select>
                    </div>
                   
            </Col>
            </Row>

            <br />

            <Row>
            <Col>    

                        <div className="form-group row">
                        <Label for="addressState" className="col-sm-2.5 col-form-label">Logradouro</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" name="addressState" id="addressState" placeholder=" Ex.: Rua Antonio da Costa"
                            />
                        </div>
                        </div>
            
                
            </Col> 
               
            <Col>    

                        <div className="form-group row">
                        <Label for="addressNumber" className="col-sm-2.5 col-form-label">Número</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" name="addressNumber" id="addressNumber" placeholder=" Ex: 94"
                          />
                        </div>
                        </div>


            </Col> 

            </Row>

                 <br/>
                 <br/>
                    
            {/* FORMAÇÃO ACADEMICA*/}

            
            <h6>Formação Acadêmica</h6>
            <br/>
           

            <Row>
            <Col className="cadastro-resultado">

                    <div className="form-group row">
                    <div className="col-sm-12">  <br></br>
                    <Label className="nivel-label" for="level">Nivel de Escolaridade: </Label>
                    <select className="custom-select-cadastro escolaridade-opcao-cadastro col-form-label" name="level" onChange={handleChange}>
                    <option value="todos">Nível de Escolaridade</option>
                    <option value="ensino medio">Ensino Médio</option>
                    <option value="graduacao">Graduação</option>
                    <option value="pos graduacao">Pós Graduação </option>
                    <option value="mestrado">Mestrado </option>
                    <option value="doutorado">Doutorado </option>
                    </select>
                    </div>
                    </div>
                    
            </Col>

            <br/>
            <Col>

                    <div className="form-group row">
                    <div className="col-sm-12">
                    <Label className="area-label" for="formation">Área de Formação: </Label><br></br>
                    <select className="custom-select-cadastro escolaridade-opcao-cadastro col-form-label" name="formation" onChange={handleChange}>
                    <option value="todos">Área de Formação</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="adm">Administração</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="gestao">Gestão</option>
                    </select>
                    </div>
                    </div>
                    
            </Col>
            </Row>
            <br/>

            <Row>
            <Col>   
           
                    <Label for="course" className="col-sm-2.5 col-form-label">Curso: </Label><br></br>
                    <div className="col-sm-12">
                    <select className="custom-select-cadastro escolaridade-opcao-cadastro col-form-label" name="course" onChange={handleChange}>
                    <option value="todos">Curso</option>
                    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                    <option value="ciencia de dados">Ciência de Dados</option>
                    <option value="ciencia da computacao">Ciência da Computação </option>
                    <option value="sistemas de informacao">Sistemas de Informação</option>
                    </select>
                    </div>
            </Col> 
            <Col>       

                    <Label className="instituicao-label" for="institution">Instituição de Ensino: </Label><br></br>
                    <select className="custom-select-cadastro escolaridade-opcao-cadastro col-form-label" name="institution" onChange={handleChange}>
                    <option value="todos">Insitituição de Ensino: </option>
                    <option value="usp">Universidade de São Paulo</option>
                    <option value="unicamp">Universidade Estadual de Campinas</option>
                    <option value="ufrj">Universidade Estadual do Rio de Janeiro</option>
                    <option value="uam">Universidade Anhembi Morumbi</option>
                    </select>
            </Col>         
            </Row>        

            <br/>

            <Row>
            <Col>

        
                    <Label for="status" className="col-sm-2.5 col-form-label" >Status: </Label>
                    <div className="col-sm-12">
                    <select className="custom-select-cadastro status-opcao-cadastro col-form-label" name="status" onChange={handleChange}>
                    <option value="todos">Status</option>
                    <option value="concluído">Concluído</option>
                    <option value="andamento">Em andamento</option>
                    </select>
                    </div>
                    

            </Col>
            </Row>

            <br />

            <Row>
            <Col>  
                    <div className="form-group row">
                    <Label for="courseStart" className="col-sm-2.5 col-form-label">Data de Início</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" name="courseStart" id="courseStart" 
                       value={candidato.courseStart}/>
                    </div>
                    </div>
            </Col>  
            <Col>        

                    <div className="form-group row">
                    <Label for="courseEnd" className="col-sm-2.5 col-form-label">Data de Conclusão</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" name="courseEnd" id="courseEnd"
                       />
                    </div>
                    </div>
                   
                    
            </Col>
            </Row>
            <Row>
            { /*<Row>
                    <div className="form-group row">
                    <Label className="adicionarformacao-label" for="adicionarformacao">Adicionar Formação</Label>
                    <div className="col-sm-12">
                    <select className="custom-select localizacao-opcao col-form-label" name="adicionarformacao">
                    <option value="todos">Todos </option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option> 
                    </select>
                    </div>
</div> */}
                              
            </Row>         

                    <br/>
                    <br/>

            {/* IDIOMAS*/}

            <h6>Idiomas</h6>
                <br/>
                

            <Row > 
            <Col >  

                    <div className="form-group row">
                    <div className="col-sm-11">
                    <div className="form-group row">
                    <Label className="idiomas-label-cadastro" for="languages">Idioma</Label>
                    <select className="custom-select idiomas-opcao col-form-label" name="languages" onChange={handleChange}>
                    <option value=""></option>
                    <option value="ingles">Inglês</option>
                    <option value="espanhol">Espanhol </option>
                    <option value="frances">Francês</option>
                    <option value="outros">Outros</option>
                    </select>
                    </div>
                    </div>
                    </div>
            </Col>



            <br></br>

            <Col>       
                    
                    <div className="form-group row">
                    <div className="col-sm-12">
                    <div className="form-group row"></div>    
                    <Label className="nivel-label" for="languages_skill">Nível de Fluência: </Label>
                    <select className="custom-select-cadastro idiomas-opcao-cadastro col-form-label" name="languages_skill" onChange={handleChange}>
                    <option value=""></option>
                    <option value="basico">Básico</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                    </select>
                    </div>
                    </div>
                    
            </Col> 
            </Row> 

            { /*<Row>
            <Col>          
                <div className="form-group row">
                    <Label className="adicionar-label" for="idiomas">Adicionar idioma?</Label>
                    <select className="custom-select idiomas-opcao col-form-label" name="adicionar">
                    <option value=""></option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                    </select>
                    </div> 
            </Col>            
            </Row>  */}  
           

            {/* EXPERIENCIA PROFISSIONAL*/}

            <br />
            <br />

            <h6>Experiência Profissional</h6>

            <br/>
              

            <Row>
            <Col>
                        <div className="form-group row">
                        <div className="col-sm-20">
                        <div className="form-group row">
                        <Label for="role" className="col-sm-2.5 col-form-label">Cargo</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" name="role" id="role" placeholder="Cargo" onChange={handleChange}/>
                        </div>
                        </div>
                        </div>
                        </div>

                       
            </Col>  
            <Col>        

                        <div className="form-group row">
                        <Label for="companyName" className="col-sm-2.5 col-form-label">Empresa</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" name="companyName" id="companyName" placeholder="Nome da empresa" onChange={handleChange}/>
                        </div>
                        </div>

            </Col>  
            </Row>

            <br/> 

           
            <Row>
            <Col>  
                    <div className="form-group row">
                    <Label for="jobStart" className="col-sm-2.5 col-form-label">Data de Início</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" name="jobStart" id="jobStart" onChange={handleChange}/>
                    </div>
                    </div>
            </Col>  
            <Col>        

                    <div className="form-group row">
                    <Label for="jobEnd" className="col-sm-2.5 col-form-label">Data de Conclusão</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" name="jobEnd" id="jobEnd" onChange={handleChange}/>
                    </div>
                    </div>
                   
                    
            </Col>
            </Row>      

            <br />

            <Row>
            <Col>
                    <div className="form-group row">
                    <Label for="activitiesPerformed" sm={2.5}>Comente aqui sua experiência profissional:</Label>
                    <Col sm={12}>
                    <Input type="textarea" name="activitiesPerformed" id="activitiesPerformed" onChange={handleChange}/>
                    </Col>
                    </div>
                    
            </Col>
            </Row>

            { /* <Col>
                    
                    <Label className="adicionarexperiencia-label" for="adicionarformacao">Adicionar Experiência?</Label>
                    <select className="custom-select localizacao-opcao col-form-label" name="adicionarexperiencia">
                    <option value="todos">Todos </option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option> 
                    </select>
                         
             </Col>
             </Row>
              */}
             <br/>
             <br/>

             {/* INTERESSE*/}

                <h6>Área de interesse profissional</h6>

                <br/>
                
            <Row> 
            <Col>  

                    <div className="form-group row">
                    <div className="col-sm-5">
                    <div className="form-group row">
                    <Label className="area_interest" for="area_interest">Qual a área de interesse:</Label>
                    <select className="custom-select interesse-opcao col-form-label" name="area_interest" onChange={handleChange}>
                    <option value=""></option>
                    <option value="backend">Back-end</option>
                    <option value="frontend">Front-end </option>
                    <option value="gestao">Gestão</option>
                    <option value="gestao">Full-Stack</option>
                    <option value="gestao">Qualidade de Software</option>
                    <option value="outros">Outros</option>
                    </select>
                    </div>
                    </div>
                    </div>
                    
            </Col>
            </Row>

            <br/>
            <br/>  

            {/* LINKEDIN*/}

                    <h6>Linkedin</h6>

                    <br/>
                  

                    <Row>
                    <Col>
                            <div className="form-group row">
                            <div className="col-sm-20">
                            <div className="form-group row">                           
                            <Input type="text" name="linkedinProfileUrl" id="linkedinProfileUrl" placeholder="www.linkedin.com.br/" 
                                     onChange={handleChange} value={candidato.linkedinProfileUrl}/>
                            </div>
                            </div>
                            </div>
                    </Col>
                    </Row>

                    <br />
                    <br />

                     {/* UPLOAD*/}

                        <h6>Upload</h6>

                        <br />

                    <Row>
                            <div className="form-group row">
                            <div className="col-sm-20">
                            <div className="form-group row">
                            <Label for="Upload" className="col-sm-2 col-form-label"></Label>
                            <Input type="file" name="upload" id="Upload" />
                            <FormText color="muted">
                            Aqui você pode fazer o Upload do seu currículo.
                            </FormText>
                            </div>
                            </div>
                            </div>
                    </Row>
        
            </Form>
           
            </body>
            </body> 
              </>
              );
}