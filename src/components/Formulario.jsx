import { useState } from "react"
import { Button, Form, Row, Col, Alert} from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"

export const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')

    const { categorias } = useCategorias()
    const {consultarBebidas} = useBebidas()

    const handleSumbit = e => {
        e.preventDefault();
        
        if(Object.values(busqueda).includes('')){
            setAlerta('Rellene todos los campos')
            return
        }

        setAlerta('')

        consultarBebidas(busqueda)


    }

  return (
    <Form
        onSubmit={handleSumbit}
    >
        {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc"
                        name="nombre"
                        id="nombre"
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3">
                    <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>

                    <Form.Select 
                        id="categoria" 
                        name="categoria"
                        value={busqueda.categoria}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                            <option>-- Selecciona Categoria --</option>
                            {categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
            <Col md={3}>
                <Button 
                    variant='danger'
                    className="text-uppercase w-100"
                    type="submit"
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}
